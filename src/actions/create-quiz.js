"use server";

import { MongoClient } from "mongodb";

export const createQuiz = async (formData) => {
  // Variable
  const session = await getServerSession(authOptions);

  let client;

  try {
    // Connexion au cluster MongoDB
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connexion à la base de données MongoDB
    const db = client.db(process.env.MONGODB_DATABASE);

    // Ajouter le questionnaire à la base de données
    await db.collection("quizzes").insertOne({
      email: session.user.email,
      content: formData.get("content")
    });

  } catch (e) {
    await client.close();
    throw new Error(e);
  }

  await client.close();

}