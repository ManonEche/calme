"use server";

import { MongoClient } from "mongodb";

export const createQuiz = async (formData) => {

  let client;

  try {
    // Connexion au cluster MongoDB
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connexion à la base de données MongoDB
    const db = client.db(process.env.MONGODB_DATABASE);

    // Récupérer le contenu du formulaire dans formData
    const {
      phoneNumber,
      birth,
      gender,
      skin,
      facialHydration,
      handHydration,
      bodyHydration,
      products,
      results,
      areas,
      preferences,
      allergies,
      choice,
      experience,
      experiences,
      improvements,
      remarks,
      userId,
      completedForm
    } = formData;

    // Ajouter le questionnaire à la base de données
    await db.collection("quizzes").insertOne(formData);
    

  } catch (e) {
    await client.close();
    throw new Error(e);
  }

  await client.close();
}