// import {
//   users,
//   userSurvey,
//   topics,
//   userTopics,
//   practitioner,
//   userPractitioner,
//   goals,
//   userGoals,
//   hearAboutUs,
//   userHearAboutUs,
// } from "./schema";
// import db from "@/lib/database";

// const debug = false; // TODO: update to user a env variable like NODE_ENV
// // const userID = 1

// const user = {
//   providerID: "11012341294207123413413413451000",
//   email: "johndoetester+12@gmail.com",
//   imgUrl:
//     "https://lh3.googleusercontent.com/a/ACg8ocI3T0ZVtpd-8mvt7teGDqLDFprWWrCLhnPxDsErsCAbfA=s96-c",
//   provider: "google",
//   name: "John Doe Tester",
//   role: "admin",
//   isNewUser: true,
//   createdAt: new Date(),
// };

// const userSurveyData = {
//   country: "United States",
//   name: "Kelvin Perez 2",
//   birthDate: "1992-01-28",
//   biologicalSex: "male",
//   zodiacSign: "Aquarius",
// };

// const hearAboutUsData = [
//   { id: 1, name: "Facebook" },
//   { id: 2, name: "Twitter" },
//   { id: 3, name: "Instagram" },
//   { id: 4, name: "LinkedIn" },
//   { id: 5, name: "Pinterest" },
//   { id: 6, name: "YouTube" },
//   { id: 7, name: "TikTok" },
//   { id: 8, name: "Snapchat" },
//   { id: 9, name: "Reddit" },
//   { id: 10, name: "Other (Please specify)" },
// ];
// const hearAboutUsWithoutId = hearAboutUsData.map(({ name }) => ({ location: name }));

// const topicsData = [
//   { id: 1, name: "Kemet" },
//   { id: 2, name: "Chakras" },
//   { id: 3, name: "Crystals" },
//   { id: 4, name: "Black Roots Science" },
//   { id: 5, name: "Ifa (Yoruba)" },
//   { id: 6, name: "Meditation" },
//   { id: 7, name: "Yoga" },
//   { id: 8, name: "Holistic Health" },
//   { id: 9, name: "Sound Therapy" },
//   { id: 10, name: "Kemetic Tree of Life" },
//   { id: 11, name: "Kabbalah" },
//   { id: 12, name: "Numerology" },
//   { id: 13, name: "Western Astrology" },
//   { id: 14, name: "Vedic Astrology" },
//   { id: 15, name: "Chinese Astrology" },
//   { id: 16, name: "Astronomy" },
//   { id: 17, name: "Alchemy" },
//   { id: 18, name: "Psychology" },
//   { id: 19, name: "Philosophy" },
//   { id: 20, name: "Symbology" },
//   { id: 21, name: "Demonology" },
//   { id: 22, name: "Mythology" },
//   { id: 23, name: "Afrikan Spirituality" },
//   { id: 24, name: "Cymatics" },
//   { id: 25, name: "Sacred Geometry" },
//   { id: 26, name: "The 5 Elements" },
//   { id: 27, name: "Magick/Magic" },
//   { id: 28, name: "Shadow Work" },
//   { id: 29, name: "Light Work" },
//   { id: 30, name: "Law of One" },
//   { id: 31, name: "Intuition" },
//   { id: 32, name: "Subconscious Mind" },
//   { id: 33, name: "MK Ultra & Mind Control" },
//   { id: 34, name: "Trauma Based Mind Control" },
//   { id: 35, name: "Predictive Programming" },
//   { id: 36, name: "Declassified Government Projects" },
//   { id: 37, name: "Tarot" },
//   { id: 38, name: "Tarot Reading" },
//   { id: 39, name: "Quantum Physics" },
//   { id: 40, name: "Metaphysics, Occult & Esoteric Knowledge" },
//   { id: 41, name: "Ascension Glossary" },
//   { id: 42, name: "Neocheating" },
//   { id: 43, name: "Law of Consent" },
//   { id: 44, name: "The Ennead" },
//   { id: 45, name: "7 Hermetic Laws of the Universe" },
//   { id: 46, name: "Emerald Tablets" },
//   { id: 47, name: "Ayurveda" },
//   { id: 48, name: "Shamanism" },
//   { id: 49, name: "Eastern Medicine" },
//   { id: 50, name: "Western Medicine" },
//   { id: 51, name: "Human Design" },
//   { id: 52, name: "I Ching" },
// ];

// const topicsWithoutId = topicsData.map(({ name }) => ({ name }));

// console.log("===== Topics without ID ======");
// // console.log(topicsWithoutId);

// const practitionerData = [
//   { id: 1, name: "Spiritual teachers (esoteric & occult)" },
//   { id: 2, name: "Dream Analyst & Interpreter" },
//   { id: 3, name: "Akashic Record Readers" },
//   { id: 4, name: "Astrologist (western, eastern, I ching, human design)" },
//   { id: 5, name: "Numerologist" },
//   { id: 6, name: "Ecstatic dance facilitators" },
//   { id: 7, name: "Breathwork facilitators" },
//   { id: 8, name: "Qi Gong facilitators" },
//   { id: 9, name: "Meditation & mindfulness facilitators" },
//   { id: 10, name: "Crystal Healer" },
//   { id: 11, name: "Sound Healers" },
//   { id: 12, name: "Grid Workers" },
//   { id: 13, name: "Conscious Technology" },
//   { id: 14, name: "Reiki & energy workers" },
//   { id: 15, name: "Life Coaches" },
//   { id: 16, name: "Intuitive coaches" },
//   { id: 17, name: "Root & Spell Worker" },
//   { id: 18, name: "Vegan food & Organic Suppliers" },
//   { id: 19, name: "Spiritual tattoo artist" },
//   { id: 20, name: "Performing artists" },
//   { id: 21, name: "Somatic Therapy" },
//   { id: 22, name: "Nutritionist" },
//   { id: 23, name: "Personal Trainers" },
//   { id: 24, name: "Herbalist & Alchemists" },
//   { id: 25, name: "Massage therapist" },
//   { id: 26, name: "Reflexologist" },
//   { id: 27, name: "Acupuncture" },
//   { id: 28, name: "Ayurvedic medicine" },
//   { id: 29, name: "Colonic practitioner" },
//   { id: 30, name: "Yoga instructors" },
//   { id: 31, name: "Tarot & oracle readers" },
//   { id: 32, name: "Transformation Coaches" },
//   { id: 33, name: "Hypnotist & theta healers" },
//   { id: 34, name: "Past Life regressionist" },
//   { id: 35, name: "Psychics & Mediums" },
//   {
//     id: 36,
//     name: "Shadow workers & trauma healers (wounded inner child work, mirror work, ancestral healing, & collapsing timelines)",
//   },
//   { id: 37, name: "Aura cleansing: entity clearing & chakra unblocking & balancing)" },
//   { id: 38, name: "Shamans: plant medicine" },
//   { id: 39, name: "Financial shamans & healer" },
// ];

// const practitionerDataWithoutIDs = practitionerData.map(({ name }) => ({ type: name }));

// const goalsData = [
//   { id: 1, name: "Spiritual Growth" },
//   { id: 2, name: "Self-Discovery" },
//   { id: 3, name: "Mental Clarity" },
//   { id: 4, name: "Emotional Healing" },
//   { id: 5, name: "Physical Well-being" },
//   { id: 6, name: "Balance and Harmony in Life" },
//   { id: 7, name: "Inner Peace" },
//   { id: 8, name: "Connection with Nature" },
//   { id: 9, name: "Strengthening Relationships" },
//   { id: 10, name: "Creative Inspiration" },
//   { id: 11, name: "Personal Empowerment" },
//   { id: 12, name: "Overcoming Fears and Challenges" },
//   { id: 13, name: "Finding Life Purpose" },
//   { id: 14, name: "Enhancing Intuition" },
//   { id: 15, name: "Cultivating Mindfulness" },
//   { id: 16, name: "Building Resilience" },
//   { id: 17, name: "Developing Compassion and Empathy" },
//   { id: 18, name: "Enhancing Focus and Concentration" },
//   { id: 19, name: "Stress Reduction" },
//   { id: 20, name: "Enhancing Communication Skills" },
//   { id: 21, name: "Cultivating Gratitude" },
//   { id: 22, name: "Understanding Human Consciousness" },
//   { id: 23, name: "Exploring Alternate Realities" },
//   { id: 24, name: "Enhancing Leadership Skills" },
//   { id: 25, name: "Other (Please specify)" },
// ];

// const goalsDataWithoutIDs = goalsData.map(({ name }) => ({ name }));

// async function main() {
//   console.log("Seeding database...");

//   // const doesUserExisit = await db.select().from(users).where(eq(users.providerID, user.id));
//   // create a user
//   if (debug) {
//     console.log("===== Insert User DB ======"); // TODO: comment out for production

//     const [insertNewUser]: any = await db
//       .insert(users)
//       .values({ ...user })
//       .returning()
//       .values();
//     // console.log({ insertNewUser });

//     const userID = insertNewUser.id;

//     console.log("===== Insert User Survey into DB ======"); // TODO: comment out for production

//     const [insertNewUserSurvey] = await db
//       .insert(userSurvey)
//       .values({ ...userSurveyData, userID })
//       .returning()
//       .values();
//     // console.log({ insertNewUserSurvey });
//   }

//   console.log("===== Insert Topic into DB ======");

//   const insertedTopics = await db
//     .insert(topics)
//     .values([...topicsWithoutId])
//     .returning()
//     .values();

//   // console.log(insertedTopics);
//   //
//   console.log("===== Insert Practititoner table ======");

//   const insertedPractitioner = await db
//     .insert(practitioner)
//     .values([...practitionerDataWithoutIDs])
//     .returning()
//     .values();

//   // console.log({ insertedPractitioner });

//   console.log("===== Insert Goals table ======");

//   const insertedGoals = await db
//     .insert(goals)
//     .values([...goalsDataWithoutIDs])
//     .returning()
//     .values();

//   // console.log({ insertedGoals });

//   console.log("===== Insert hearAboutUs table ======");

//   const insertHearAboutUs = await db
//     .insert(hearAboutUs)
//     .values([...hearAboutUsWithoutId])
//     .returning()
//     .values();

//   // console.log({ insertHearAboutUs });

//   if (debug) {
//     console.log("===== Insert userTopics table ======"); // TODO: comment out for production

//     const insertUserTopics = await db
//       .insert(userTopics)
//       .values([
//         { userID: 1, topicsID: 2 },
//         { userID: 1, topicsID: 1 },
//         { userID: 1, topicsID: 4 },
//       ])
//       .returning()
//       .values();

//     console.log("===== Insert userPractitioner table ======"); // TODO: comment out for production

//     const insertUserPractitioner = await db
//       .insert(userPractitioner)
//       .values([
//         { userID: 1, practitionerID: 2 },
//         { userID: 1, practitionerID: 5 },
//         { userID: 1, practitionerID: 12 },
//       ])
//       .returning()
//       .values();

//     console.log("===== Insert userGoals table ======"); // TODO: comment out for production

//     const insertUserGoals = await db
//       .insert(userGoals)
//       .values([
//         { userID: 1, goalID: 2 },
//         { userID: 1, goalID: 5 },
//         { userID: 1, goalID: 8 },
//       ])
//       .returning()
//       .values();

//     console.log({ insertUserGoals });

//     console.log("===== Insert userHearAboutUs table ======"); // TODO: comment out for production

//     const insertUserHearAboutUs = await db
//       .insert(userHearAboutUs)
//       .values([
//         { userID: 1, hearAboutUsID: 1 },
//         { userID: 1, hearAboutUsID: 4 },
//         { userID: 1, hearAboutUsID: 3 },
//       ])
//       .returning()
//       .values();

//     console.log({ insertUserHearAboutUs });
//   }

//   // seed the other categories to build relationships in testing

//   console.log("Seeding ended!");
// }

// main().catch((err) => {
//   console.error(err);
//   process.exit(0);
// });
