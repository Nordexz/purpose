import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { offers } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const offerRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        author: z.string().min(1),
        description: z.string().min(1),
        duration: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(offers).values({
        name: input.name,
        author: input.author,
        description: input.description,
        duration: input.duration,
      });
    }),

  edit: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        author: z.string().min(1).optional(),
        description: z.string().min(1).optional(),
        status: z.enum(["PREPEARING", "ACTIVE", "REJECTED", "ENDED"]).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(offers)
        .set(
          !input.status
            ? {
                name: input.name,
                author: input.author,
                description: input.description,
              }
            : { status: input.status },
        )
        .where(eq(offers.id, input.id));
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(offers).where(eq(offers.id, input.id));
    }),

  getAll: publicProcedure
    .input(
      z
        .object({
          status: z.enum(["PREPEARING", "ACTIVE", "REJECTED", "ENDED"]),
        })
        .optional(),
    )
    .query(({ ctx, input }) => {
      return ctx.db.query.offers.findMany({
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
        where: (offers, { eq }) =>
          input?.status && eq(offers.status, input.status),
      });
    }),
});
