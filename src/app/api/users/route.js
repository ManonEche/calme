"use server";

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
let client;

  try {
    // Connexion au cluster MongoDB
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connexion à la base de données MongoDB
    const db = client.db(process.env.MONGODB_DATABASE);

    // Récupérer les utilisateurs
    let users = await db.collection("users").find({role : "user"}).toArray();

    await client.close();
    return NextResponse.json(
      {
        users
      }, {
      status: 200
    }
    );

  } catch (e) {
    await client.close();
    throw new Error(e.message);
  }
}