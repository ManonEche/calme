import { MongoClient } from "mongodb";

export async function POST(request) {
  const { lastname, firstname } = await request.json();
  let client;
  try {
    // Connexion au cluster MongoDB
    client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connexion à la base de données MongoDB
    const db = client.db(process.env.MONGODB_DATABASE);

    // Récupérer les utilisateurs
    let users = await db.collection("users").find({ lastname, firstname }).toArray();

    return users;

  } catch (e) {
    await client.close();
    throw new Error(e.message);
  }
}