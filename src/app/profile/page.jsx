"use client";

import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ChevronDown, Info, X } from 'lucide-react';
import { useState } from "react";

export default function Profile() {
  // State
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-12">Mon profil</h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-4/5 px-0 mx-0">
            <div className="w-3/4 text-center whitespace-pre-line">
              <h2 className="text-3xl pb-10">Je remplis mon profil beauté</h2>
              <form className="flex flex-col items-center gap-4 text-xl pb-10">

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="lastname" className="text-start w-3/4">Nom</label>
                  <input type="text" name="lastname" className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed" value="Eche" disabled />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="firstname" className="text-start w-3/4">Prénom</label>
                  <input type="text" name="firstname" className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed" value="Manon" disabled />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="email" className="text-start w-3/4">Email</label>
                  <input type="email" name="email" className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed" value="manon@manon.com" disabled />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="tel" className="text-start w-3/4">Numéro de téléphone</label>
                  <input type="tel" name="tel" className="w-3/4 rounded-2xl px-5 py-3 text-xl" required />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="date" className="text-start w-3/4">Date de naissance</label>
                  <input type="date" name="date" className="w-3/4 rounded-2xl px-5 py-3 text-xl" required />
                </div>

                <div className="relative flex flex-col items-center w-3/4 gap-2">
                  <label htmlFor="skin" className="text-start w-full flex gap-2 items-center">
                    Type de peau
                    <button onClick={() => setOpenModal(true)}>
                      <Info className="w-5" />
                    </button>
                  </label>
                  <select id="skin" name="skin" className="appearance-none w-full rounded-2xl px-5 py-3 text-lg" required>
                    <option value="">Sélectionner :</option>
                    <option value="dry">Sèche</option>
                    <option value="normal">Normale</option>
                    <option value="combination">Mixte</option>
                    <option value="oily">Grasse</option>
                    <option value="nothing">Ne sais pas</option>
                  </select>
                  <ChevronDown className="absolute pointer-events-none bottom-3 right-3" />

                  {/* Modal */}
                  {openModal && (
                    <div className="fixed inset-0 bg-calme-dark bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-calme-light py-5 px-8 rounded-2xl w-1/2">
                        <div className="absolute w-1/2 right-8">
                          <button onClick={() => setOpenModal(false)}><X /></button>
                        </div>
                        <div className="text-start whitespace-pre-line">
                          <p><b>Peau sèche :</b> manque de sébum, tiraillements et inconforts.</p>
                          <p><b>Peau normale :</b> aucun excès ou manque de sébum.</p>
                          <p><b>Peau mixte :</b> excès de sébum sur la zone "T"
                            (menton, nez et front). Les autres zones sont normales à sèches.</p>
                          <p><b>Peau grasse :</b> excès de sébum présent sur l'ensemble du visage.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </form>
              <Button>Enregistrer</Button>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </>
  )
}