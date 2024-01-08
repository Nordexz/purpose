import { offerRouter } from "@/server/api/routers/offers";
import { createTRPCRouter } from "@/server/api/trpc";
import { contractRouter } from "./routers/contracts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  offers: offerRouter,
  contracts: contractRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
