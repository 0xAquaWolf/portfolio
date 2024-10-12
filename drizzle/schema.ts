import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
// import { relations } from "drizzle-orm";

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }), // UUID as primary key
  slug: text('slug').notNull(), // Unique slug for each post
  views: integer('views').default(0), // Track the total number of views
  likes: integer('likes').default(0), // Track the total number of likes
});

// export const users = sqliteTable("users", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   providerID: text("provider_id"),
//   email: text("email"),
//   imgUrl: text("img_url"),
//   provider: text("provider"),
//   ipAddress: text("ip_address"),
//   name: text("name"),
//   role: text("role"),
//   isNewUser: integer("is_new_user", { mode: "boolean" }),
//   createdAt: integer("created_at", { mode: "timestamp" }),
//   hasPaid: integer("has_paid", { mode: "boolean" }).default(false),
//   tokens: integer("tokens", { mode: "number" }).default(0),
// });

// export const userRelations = relations(users, ({ one, many }) => ({
//   userSurvey: one(userSurvey, {
//     fields: [users.id],
//     references: [userSurvey.userID],
//   }),
//   userTopics: many(userTopics),
//   userPractitioner: many(userPractitioner),
//   userGoals: many(userGoals),
//   userHearAboutUs: many(userHearAboutUs),
// }));

// export const waitlist = sqliteTable("waitlist", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   email: text("email"),
//   createdAt: integer("created_at", { mode: "timestamp" }),
// });

// // ===== New User Data Main Tables =======

// // relationship: one-to-one
// export const userSurvey = sqliteTable("user_survey", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   userID: integer("user_id").references(() => users.id, {
//     onDelete: "cascade",
//   }),
//   country: text("country"),
//   name: text("name"),
//   birthDate: text("birth_date"),
//   biologicalSex: text("biological_sex"),
//   zodiacSign: text("zodiac_sign"),
// });

// // relationship: one-to-many

// // ===== Topics Tables =======
// export const topics = sqliteTable("topics", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name"),
// });

// export const topicsRelations = relations(topics, ({ many }) => ({
//   userTopics: many(userTopics),
// }));

// export const userTopics = sqliteTable("user_topics", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   userID: integer("user_id")
//     .notNull()
//     .references(() => users.id),
//   topicsID: integer("topicsID")
//     .notNull()
//     .references(() => topics.id),
// });

// export const userTopicsRelations = relations(userTopics, ({ one }) => ({
//   user: one(users, {
//     fields: [userTopics.userID],
//     references: [users.id],
//   }),
//   topics: one(topics, {
//     fields: [userTopics.topicsID],
//     references: [topics.id],
//   }),
// }));

// // ===== Practitioner Tables =======

// // relationship: one-to-many
// export const practitioner = sqliteTable("practitioner", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   type: text("type"),
// });

// export const practitionerRelations = relations(practitioner, ({ many }) => ({
//   userPractitioner: many(userPractitioner),
// }));

// export const userPractitioner = sqliteTable("user_practitioner", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   userID: integer("user_id")
//     .notNull()
//     .references(() => users.id),
//   practitionerID: integer("practitioner_id")
//     .notNull()
//     .references(() => practitioner.id),
// });

// export const userPractitionerRelations = relations(
//   userPractitioner,
//   ({ one }) => ({
//     user: one(users, {
//       fields: [userPractitioner.userID],
//       references: [users.id],
//     }),
//     practitionerType: one(practitioner, {
//       fields: [userPractitioner.practitionerID],
//       references: [practitioner.id],
//     }),
//   }),
// );

// // // relationship: one-to-many
// export const goals = sqliteTable("goals", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name"),
// });

// export const goalsRelations = relations(goals, ({ many }) => ({
//   userGoals: many(userGoals),
// }));

// export const userGoals = sqliteTable("user_goals", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   userID: integer("user_id")
//     .notNull()
//     .references(() => users.id),
//   goalID: integer("goal_id")
//     .notNull()
//     .references(() => goals.id),
// });

// export const userGoalsRelations = relations(userGoals, ({ one }) => ({
//   user: one(users, {
//     fields: [userGoals.userID],
//     references: [users.id],
//   }),
//   goals: one(goals, {
//     fields: [userGoals.goalID],
//     references: [goals.id],
//   }),
// }));

// // // relationship: one-to-many
// export const hearAboutUs = sqliteTable("hear_about_us", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   location: text("location"),
// });

// export const hearAboutUsRelations = relations(hearAboutUs, ({ many }) => ({
//   userHearAboutUs: many(userHearAboutUs),
// }));

// // // ===== Join Tables =======
// export const userHearAboutUs = sqliteTable("user_hear_about_us", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   userID: integer("user_id")
//     .notNull()
//     .references(() => users.id),
//   hearAboutUsID: integer("hear_about_us_id")
//     .notNull()
//     .references(() => hearAboutUs.id),
// });

// export const userHearAboutUsRelations = relations(
//   userHearAboutUs,
//   ({ one }) => ({
//     user: one(users, {
//       fields: [userHearAboutUs.userID],
//       references: [users.id],
//     }),
//     location: one(hearAboutUs, {
//       fields: [userHearAboutUs.hearAboutUsID],
//       references: [hearAboutUs.id],
//     }),
//   }),
// );
