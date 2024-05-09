"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import { useState } from "react";

export default function Header() {
  // State
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-calme-medium">
        <div className="flex justify-between items-center w-screen">
          <div className="flex items-center gap-2 px-3 py-1">
            <Image src="/logo.webp" width={60} height={60} alt="Logo" />
            <Image src="/brand.webp" width={100} height={100} alt="Marque" />
          </div>
          <div className="py-5 pe-8 text-calme-dark">
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-3 text-xl">
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
      </div>
    </>
  )
}