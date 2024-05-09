"use client";

import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // State
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="flex flex-col lg:w-1/2">
              <div className="flex flex-1 justify-center items-center">
                <div className="w-3/4 text-center whitespace-pre-line pt-28">
                  <h1 className="text-5xl pt-12 pb-5 lg:pt-0">Accéder à votre profil beauté</h1>
                  <p className="text-2xl p-8">Dévoilez votre éclat naturel en créant votre profil beaute sur mesure avant votre prochain rendez-vous à notre institut.</p>
                  <Link href="/login">
                    <Button>Se connecter</Button>
                  </Link>
                  <Link href="/signup">
                    <p className="text-2xl p-8">Pas de compte ? <strong>Inscrivez-vous</strong></p>
                  </Link>
                </div>
              </div >
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