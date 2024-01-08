import { inngest } from "./client";
import { db } from "@/server/db";
import { offers } from "@/server/db/schema";
import { eq } from "drizzle-orm";

const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const { sec, offerId } = event.data as { sec: number; offerId: string };
    await step.sleep("wait-a-moment", `${sec}s`);

    await step.run("change_status", async () => {
      const offer = (
        await db
          .update(offers)
          .set({ status: "ENDED" })
          .where(eq(offers.id, offerId))
          .returning()
      )[0];

      await db.insert(offers).values({
        name: offer!.name,
        description: offer!.description,
        duration: offer!.duration,
        author: offer!.author,
      });
    });
    return { event, body: "Hello, World!" };
  },
);

export default helloWorld;
