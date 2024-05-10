"use client";

import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { checkEmail } from "@/utils/check-email";
import Image from "next/image";
import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";

export default function Login() {
  // Variable
  const router = useRouter();

  // State
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  const prepareLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    // Vérifier si tous les champs sont remplis
    if (!email || !password) {
      return toast.error("Merci de remplir tous les champs.")
    }

    // Vérifier si l'email est valide
    if (!checkEmail(email)) {
      return toast.error("Veuillez entrer un email valide.")
    }

    // Connecter l'utilisateur
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if (response.error) {
        return toast.error(response.error);
      }

    } catch (error) {
      return toast.error(error.message);
    }

    // Success
    toast.success("Vous êtes connecté(e).");

    const session = await getSession();

    //Redirect en fonction du rôle
    if (session && session.user.role) {
      if (session.user.role === "admin") {
        router.replace("/admin");
      } else {
        router.replace("/profile");
      }
    }

  }

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-calme-medium min-h-screen w-screen">
        <div>
          <div className="absolute z-30 flex justify-between w-screen">
            <div className="flex items-center gap-2 p-5">
              <Image src="/logo.webp" width={100} height={100} alt="Logo" />
              <Image src="/brand.webp" width={100} height={100} alt="Marque" />
            </div>
            <div className="py-7 px-8">
              <nav className="hidden md:flex">
                <ul className="flex gap-3 text-xl">
                  <Link href="/home">
                    <li>Accueil</li>
                  </Link>
                  <Link href="/services">
                    <li>Nos prestations</li>
                  </Link>
                  <Link href="/about">
                    <li>À propos</li>
                  </Link>
                  <Link href="/contact">
                    <li>Contact</li>
                  </Link>
                  <Link href="/login">
                    <li><UserRound /></li>
                  </Link>
                </ul>
              </nav>

              {/* Menu burger */}
              <div className="md:hidden">
                <button onClick={burgerMenu}>
                  <Menu />
                </button>
                {isOpen && (
                  <div className="absolute top-16 right-0 bg-calme-medium p-4 rounded">
                    <ul className="flex flex-col gap-3 text-xl">
                      <Link href="/home">
                        <li>Accueil</li>
                      </Link>
                      <Link href="/services">
                        <li>Nos prestations</li>
                      </Link>
                      <Link href="/about">
                        <li>À propos</li>
                      </Link>
                      <Link href="/contact">
                        <li>Contact</li>
                      </Link>
                      <Link href="/login">
                        <li><UserRound /></li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-full lg:w-1/2">
              <div className="flex flex-1 justify-center items-center">
                <div className="w-3/4 text-center whitespace-pre-line pt-28">
                  <h1 className="text-5xl pb-10 pt-28 lg:pt-0">Connexion</h1>

                  <form className="flex flex-col items-center gap-4" action={prepareLogin}>

                    <input type="email" name="email" placeholder="Email" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="password" name="password" placeholder="Mot de passe" className="w-3/4 rounded-2xl px-5 py-3 text-xl mb-10 bg-calme-light" required />

                    <Button type="submit">Se connecter</Button>

                  </form>


                  <Link href="/signup">
                    <p className="text-2xl pt-8">Pas de compte ? <strong>Inscrivez-vous</strong></p>
                  </Link>
                </div>
              </div>
              <div className="pt-8 sm:absolute sm:left-0 sm:bottom-0">
                <Footer />
              </div>
            </div>
            <div className="relative z-10 bg-right bg-[url('/home.webp')] bg-cover bg-no-repeat w-1/2 h-screen hidden lg:block">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}