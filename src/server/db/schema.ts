// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  pgTableCreator,
  index,
  timestamp,
  varchar,
  uuid,
  pgEnum,
  integer
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const offerStatus = pgEnum("offer_statuses", [
  "PREPEARING",
  "ACTIVE",
  "REJECTED",
  "ENDED",
]);

export const pgTable = pgTableCreator((name) => `${name}`);

export const offers = pgTable(
  "offers",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 64 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    author: varchar("author", { length: 32 }).notNull(),
    duration: integer('duration').notNull(),
    status: offerStatus("offer_statuses").default("PREPEARING").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const offersRelations = relations(offers, ({ one }) => ({
  contracts: one(contracts, {fields: [offers.id], references: [contracts.offerId]}),
}));

export const contracts = pgTable("contracts", {
  id: uuid("id").defaultRandom().primaryKey(),
  offerId: uuid("offer_id").references(() => offers.id).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const contractsRelations = relations(contracts, ({ one }) => ({
  offer: one(offers),
}));

export type Offer = typeof offers.$inferSelect;
export type Contract = typeof contracts.$inferSelect;
