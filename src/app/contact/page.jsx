import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-12">Contact</h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center pt-8">
            <div className="flex justify-center items-center w-screen gap-16">
              <div className="text-2xl text-center whitespace-pre-line">
                <h2 className="font-bold pb-3">Adresse</h2>
                <p>Calme</p>
                <p>42 Rue des Roses</p>
                <p>Ville Éclatante, France</p>
                <br />
                <h2 className="font-bold pb-3">Horaires</h2>
                <p>Du Mardi au Samedi</p>
                <p>de 9:00 à 19:00</p>
                <br />
                <h2 className="font-bold pb-3">Coordonnées</h2>
                <div className="flex justify-center items-end gap-2 text-calme-dark">
                  <Phone />
                  <p>01.23.45.67.89</p>
                </div>
                <div className="flex justify-center items-end gap-2 text-calme-dark">
                  <Mail />
                  <p>contact@calme.com</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Image src="/map.webp" width={500} height={500} className="w-3/4" alt="Plan"/>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <Footer />
        </div>
      </div>
    </>
  )
}