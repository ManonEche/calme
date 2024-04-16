"use server";

import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import { checkEmail } from "@/utils/check-email";

export const createUser = async (lastname, firstname, email, password) => {
  // Vérifier si tous les champs sont remplis
  if (!lastname || !firstname || !email || !password) {
    return toast.error("Merci de remplir tous les champs.")
  }

  // Vérifier si l'email est valide
  if (!checkEmail(email)) {
    return toast.error("Veuillez entrer un email valide.")
  }

  // Connexion au cluster MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_CLIENT);

  // Connexion à la base de données MongoDB
  const db = client.db(process.env.MONGODB_DATABASE);

  try {
    // ETAPE 1 : Vérifier si l'email est déjà utilisé

    // Sélectionner la collection users
    let user = await db.collection("users").find({ email }).limit(1).toArray();

    // Si l'email est déjà utilisé
    if (user.length !== 0) {
      await client.close();
      throw new Error("Cet email est déjà utilisé.");
    }

    // ETAPE 2 : Encrypter le mot de passe
    const encryptedPassword = await bcrypt.hash(password, 10);

    // ETAPE 3 : Créer l'user
    await db.collection("users").insertOne({
      lastname,
      firstname,
      email,
      password: encryptedPassword,
      role: "user"
    });

  } catch (e) {
    await client.close();
    throw new Error(e);
  }

  await client.close();

}