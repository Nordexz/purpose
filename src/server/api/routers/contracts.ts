import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contracts, offers } from "@/server/db/schema";
import { inngest } from "@/inngest/client";
import { eq } from "drizzle-orm";

export const contractRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        offerId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(contracts).values({
        offerId: input.offerId,
      });

      const offer = (await ctx.db.update(offers).set({
        status: "ACTIVE"
      }).where(eq(offers.id, input.offerId)).returning())[0]

      await inngest.send({
        name: "test/hello.world",
        data: {
          offerId: input.offerId,
          sec: offer?.duration ?? 0
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.contracts.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      with: { offer: true },
    });
  }),
});
