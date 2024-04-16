import { MongoClient } from "mongodb";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          // Connexion au cluster MongoDB
          const client = await MongoClient.connect(process.env.MONGODB_CLIENT);

          // Connexion à la base de données MongoDB
          const db = client.db(process.env.MONGODB_DATABASE);

          // ETAPE 1 : Récupérer l'utilisateur pour ce mail

          // Sélectionner la collection users
          let user = await db.collection("users").find({ email }).limit(1).toArray();

          // Si l'email utilisé n'existe pas dans la collection users
          if (user.length === 0) {
            await client.close();
            throw new Error("Cet email n'a pas de compte.");
          }

          // ETAPE 2 : Vérifier le mot de passe en comparant celui saisi et celui de la bdd
          const isPasswordValid = await bcrypt.compare(password, user[0].password);

          // Si le password n'est pas valide
          if (!isPasswordValid) {
            await client.close();
            throw new Error("Le mot de passe est incorrect.");
          }

          // ETAPE 3 : L'utilisateur est connecté

          // Formater user
          user = user.map(user => ({
            _id: user._id.toString(),
            lastname: user.lastname,
            firstname: user.firstname,
            email: user.email,
            role: user.role
          }))[0];

          await client.close();

          return user;

        } catch (e) {
          throw new Error(e.message);
        }
      }
    })

  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, user, token }) {
      session.user = token.user;

      const { email } = session.user;

      // Connexion au cluster MongoDB
      const client = await MongoClient.connect(process.env.MONGODB_CLIENT);

      // Connexion à la base de données MongoDB
      const db = client.db(process.env.MONGODB_DATABASE);

      // Récupérer l'utilisateur
      let userDB = await db.collection("users").find({ email }).limit(1).toArray();

      userDB = userDB.map(user => ({
        _id: user._id.toString(),
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        role: user.role
      }))[0];

      await client.close();

      //Ici cela retourne tout ce qu'il y a dans session et dans userDB
      return {
        ...session,
        user: {
          ...userDB
        }
      }
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };