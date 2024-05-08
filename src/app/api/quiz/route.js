import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST() {
  let client;

  try {
    // Connexion au cluster MongoDB
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connexion à la base de données MongoDB
    const db = client.db(process.env.MONGODB_DATABASE);

    // ETAPE 1 : Récupérer les utilisateurs
    let users = await db.collection("users").find({}).toArray();

    // // Formater les utilisateurs pour récupérer l'id
    // user = user.map(user => ({
    //   ...user,
    //   _id: user._id.toString()
    // }))[0]

    // ETAPE 2 : Récupérer le formulaire des utilisateurs
    let quizzes = await db.collection("quizzes").find({}).toArray();

    // // Formater
    // quizzes = quizzes.map(quiz => ({
    //   ...quiz,
    //   _id: quiz._id.toString()
    // }))

    await client.close();
    return NextResponse.json(
      {
        users, quizzes
      }, {
      status: 200
    }
    );

  } catch (e) {
    await client.close();
    throw new Error(e.message);
  }

}