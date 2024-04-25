"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { MongoClient } from "mongodb";
import { getServerSession } from "next-auth";

export const createQuiz = async (formData) => {
    // Variable
    const session = await getServerSession(authOptions);

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
      completedForm
    } = formData;

    // Ajouter l'id de l'utilisateur aux réponses du formulaire
    formData._id = session.user._id;

    // Ajouter le questionnaire à la base de données
    await db.collection("quizzes").insertOne(formData);

  } catch (e) {
    await client.close();
    throw new Error(e);
  }

  await client.close();

}