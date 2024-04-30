import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  // Récupérer le pseudo depuis le request body
  const data = await request.json();
  const { email } = data;
  let client;

  try {
    // Connexion au cluster MongoDB
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connexion à la base de données MongoDB
    const db = client.db(process.env.MONGODB_DATABASE);

    // ETAPE 1 : Récupérer l'utilisateur
    let user = await db.collection("users").find({ email }).limit(1).toArray();

    if (!user) {
      throw new Error("Cet utilisateur n'existe pas.")
    }

    // Formater l'utilisateur pour récupérer l'id
    user = user.map(user => ({
      ...user,
      _id: user._id.toString()
    }))[0]

    // ETAPE 2 : Récupérer le formulaire de cet utilisateur
    let quizzes = await db.collection("quizzes").find({ email }).sort({ creation: -1 }).toArray();

    // Formater
    quizzes = quizzes.map(quiz => ({
      ...quiz,
      _id: quiz._id.toString()
    }))

    await client.close();
    return NextResponse.json(
      {
        user, quizzes
      }, {
      status: 200
    }
    );

  } catch (e) {
    await client.close();
    throw new Error(e.message);
  }

}