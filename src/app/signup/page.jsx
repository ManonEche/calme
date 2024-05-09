"use client";

import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { createUser } from "@/actions/create-user";
import { checkEmail } from "@/utils/check-email";
import Image from "next/image";
import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function Signup() {
  // Variable
  const router = useRouter();

  // State
  const [isOpen, setIsOpen] = useState(false);

  // Function (pour récupérer infos du nouvel utilisateur)
  const prepareCreateUser = async (formData) => {
    const lastname = formData.get("lastname");
    const firstname = formData.get("firstname");
    const email = formData.get("email");
    const password = formData.get("password");

    // Vérifier si tous les champs sont remplis
    if (!lastname || !firstname || !email || !password) {
      return toast.error("Merci de remplir tous les champs.")
    }

    // Vérifier si l'email est valide
    if (!checkEmail(email)) {
      return toast.error("Veuillez entrer un email valide.")
    }

    try {
      await createUser(lastname, firstname, email, password);
    } catch {
      return toast.error("Veuillez entrer un email valide.");
    }

    // Succès
    toast.success("Compte créé avec succès !");

    // Redirection
    router.push("/login");

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
                  <h1 className="text-5xl pb-10 pt-16 lg:pt-0">Inscription</h1>

                  <form className="flex flex-col items-center gap-4" action={prepareCreateUser}>

                    <input type="text" name="lastname" placeholder="Nom" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="text" name="firstname" placeholder="Prénom" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="email" name="email" placeholder="Email" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="password" name="password" placeholder="Mot de passe" className="w-3/4 rounded-2xl px-5 py-3 text-xl mb-10 bg-calme-light" required />

                    <Button type="submit">S'inscrire</Button>
                  </form>

                  <Link href="/login">
                    <p className="text-2xl pt-8">Déjà inscrit(e) ? <strong>Connectez-vous</strong></p>
                  </Link>
                </div>
              </div>
              <div className="absolute left-0 bottom-0">
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