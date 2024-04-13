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
              <form className="flex flex-col items-center gap-7 text-xl pb-10" onSubmit={(e) => e.preventDefault()}>

              <h3 className="text-2xl font-semibold w-3/4 text-start">Informations personnelles</h3>

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
                  <input type="tel" name="tel" className="w-3/4 rounded-2xl px-5 py-3 text-xl " />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="date" className="text-start w-3/4">Date de naissance</label>
                  <input type="date" name="date" className="w-3/4 rounded-2xl px-5 py-3 text-xl" />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <p className="w-3/4 text-start">Vous êtes ?</p>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="man" className="text-start w-full">Un homme</label>
                    <input type="radio" id="man" name="gender" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="woman" className="text-start w-full">Une femme</label>
                    <input type="radio" id="woman" name="gender" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="other" className="text-start w-full">Autre</label>
                    <input type="radio" id="other" name="gender" className="w-fit text-xl accent-calme-dark" />
                  </div>
                </div>

                <div className="relative flex flex-col items-center w-3/4 gap-2">
                  <label htmlFor="skin" className="text-start w-full flex gap-2 items-center">
                    Quel est votre type de peau ?
                    <button onClick={() => setOpenModal(true)}>
                      <Info className="w-5" />
                    </button>
                  </label>
                  <select id="skin" name="skin" className="appearance-none w-full rounded-2xl px-5 py-3 text-lg">
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

                <h3 className="text-2xl font-semibold w-3/4 text-start">Hydratation</h3>

                <div className="flex flex-col items-center w-full gap-2">
                  <p className="w-3/4 text-start">À quelle fréquence vous hydratez-vous <b>le visage</b> ?</p>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="everyDayHead" className="text-start w-full">Tous les jours</label>
                    <input type="radio" id="everyDayHead" name="head" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="twiceHead" className="text-start w-full">2/3 fois par semaine</label>
                    <input type="radio" id="twiceHead" name="head" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="onceHead" className="text-start w-full">1 fois par semaine</label>
                    <input type="radio" id="onceHead" name="head" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="occasionallyHead" className="text-start w-full">Occasionnellement</label>
                    <input type="radio" id="occasionallyHead" name="head" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="neverHead" className="text-start w-full">Jamais</label>
                    <input type="radio" id="neverHead" name="head" className="w-fit text-xl accent-calme-dark" />
                  </div>
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <p className="w-3/4 text-start">À quelle fréquence vous hydratez-vous <b>les mains</b> ?</p>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="everyDayHands" className="text-start w-full">Tous les jours</label>
                    <input type="radio" id="everyDayHands" name="hands" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="twiceHands" className="text-start w-full">2/3 fois par semaine</label>
                    <input type="radio" id="twiceHands" name="hands" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="onceHands" className="text-start w-full">1 fois par semaine</label>
                    <input type="radio" id="onceHands" name="hands" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="occasionallyHands" className="text-start w-full">Occasionnellement</label>
                    <input type="radio" id="occasionallyHands" name="hands" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="neverHands" className="text-start w-full">Jamais</label>
                    <input type="radio" id="neverHands" name="hands" className="w-fit text-xl accent-calme-dark" />
                  </div>
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <p className="w-3/4 text-start">À quelle fréquence vous hydratez-vous <b>le corps</b> ?</p>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="everyDayBody" className="text-start w-full">Tous les jours</label>
                    <input type="radio" id="everyDayBody" name="body" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="twiceBody" className="text-start w-full">2/3 fois par semaine</label>
                    <input type="radio" id="twiceBody" name="body" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="onceBody" className="text-start w-full">1 fois par semaine</label>
                    <input type="radio" id="onceBody" name="body" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="occasionallyBody" className="text-start w-full">Occasionnellement</label>
                    <input type="radio" id="occasionallyBody" name="body" className="w-fit text-xl accent-calme-dark" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                    <label htmlFor="neverBody" className="text-start w-full">Jamais</label>
                    <input type="radio" id="neverBody" name="body" className="w-fit text-xl accent-calme-dark" />
                  </div>
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label htmlFor="products" className="text-start w-3/4">Quels sont les produits que vous utilisez pour votre visage, vos mains et votre corps ?</label>
                  <textarea name="products" className="w-3/4 rounded-2xl px-5 py-3 text-xl" />
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