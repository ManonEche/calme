import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ChevronDown, Info } from 'lucide-react';

export default function Profile() {
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
                  <label for="lastname" className="text-start w-3/4">Nom</label>
                  <input type="text" name="lastname" className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:opacity-75 disabled:cursor-not-allowed" value="Eche" disabled />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label for="firstname" className="text-start w-3/4">Prénom</label>
                  <input type="text" name="firstname" className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:opacity-75 disabled:cursor-not-allowed" value="Manon" disabled />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label for="email" className="text-start w-3/4">Email</label>
                  <input type="email" name="email" className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:opacity-75 disabled:cursor-not-allowed" value="manon@manon.com" disabled />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label for="tel" className="text-start w-3/4">Numéro de téléphone</label>
                  <input type="tel" name="tel" className="w-3/4 rounded-2xl px-5 py-3 text-xl" required />
                </div>

                <div className="flex flex-col items-center w-full gap-2">
                  <label for="date" className="text-start w-3/4">Date de naissance</label>
                  <input type="date" name="date" className="w-3/4 rounded-2xl px-5 py-3 text-xl" required />
                </div>

                <div className="relative flex flex-col items-center w-3/4 gap-2">
                  <label for="skin" className="text-start w-full flex gap-2 items-center">Type de peau <Info className="w-5"/></label>
                  <select id="skin" name="skin" className="appearance-none w-full rounded-2xl px-5 py-3 text-lg" required>
                    <option value="">Sélectionner :</option>
                    <option value="dry">Sèche</option>
                    <option value="normal">Normale</option>
                    <option value="combination">Mixte</option>
                    <option value="oily">Grasse</option>
                    <option value="nothing">Ne sais pas</option>
                  </select>
                    <ChevronDown className="absolute pointer-events-none bottom-3 right-3" />
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