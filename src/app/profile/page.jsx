"use client";

import { createQuiz } from "@/actions/create-quiz";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";
import { ChevronDown, Info, Power, X } from 'lucide-react';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import moment from "moment-timezone";
import "moment/locale/fr";

export default function Profile() {
  // Variable
  const { data: session } = useSession();

  // States
  const [handleChoice, setHandleChoice] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [skin, setSkin] = useState("");
  const [facialHydration, setFacialHydration] = useState("");
  const [handHydration, setHandHydration] = useState("");
  const [bodyHydration, setBodyHydration] = useState("");
  const [products, setProducts] = useState("");
  const [results, setResults] = useState("");
  const [areas, setAreas] = useState("");
  const [preferences, setPreferences] = useState("");
  const [allergies, setAllergies] = useState("");
  const [choice, setChoice] = useState("");
  const [experience, setExperience] = useState("");
  const [experiences, setExperiences] = useState("");
  const [improvements, setImprovements] = useState("");
  const [remarks, setRemarks] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingQuiz, setLoadingQuiz] = useState(true);

  // Functions
  const handleTextArea = (e) => {

    setChoice(e.target.value);

    if (e.target.value === "oui") {
      setHandleChoice(true);
    } else {
      setHandleChoice(false);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createQuiz({
      phoneNumber,
      birth,
      gender,
      skin,
      facialHydration,
      handHydration,
      bodyHydration,
      products,
      results,
      areas,
      preferences,
      allergies,
      choice,
      experience,
      experiences,
      improvements,
      remarks,
      userId: session?.user._id,
      completedForm: true
    });

    // Alerte de succès pour l'envoi du formulaire
    toast.success("Formulaire envoyé avec succès.")

    // Réinitialisation des champs
    setPhoneNumber("");
    setBirth("");
    setGender("");
    setSkin("");
    setFacialHydration("");
    setHandHydration("");
    setBodyHydration("");
    setProducts("");
    setResults("");
    setAreas("");
    setPreferences("");
    setAllergies("");
    setChoice("");
    setExperience("");
    setExperiences("");
    setImprovements("");
    setRemarks("");

    // Détection du formulaire comme soumis
    setFormSent(true);

    // Rechargement de la page
    window.location.reload();
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            quizzes
          })
        });
        const data = await response.json();
        setQuizzes(data.quizzes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setLoadingQuiz(false);
      }
    }

    fetchData();
  }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <div className="min-h-screen">
          {session?.user?.email && (
            <div className="flex justify-end my-4 mx-8">
              <Link href="/home">
                <Power onClick={() => signOut()} />
              </Link>
            </div>
          )}

          {loading && (
            <div className="flex justify-center items-center text-2xl mt-5 duration-1000 h-screen">
              <div><Loader /></div>
            </div>
          )}

          {!loading && (<h1 className="text-5xl text-center mt-11 mb-12">Mon profil</h1>)}

          {!loadingQuiz && !formSent && !quizzes.some((quizzes) => quizzes?.userId === session?.user._id) ? (

            <div className="flex justify-center">
              <div className="flex justify-center items-center lg:w-4/5 px-0 mx-0">
                <div className="lg:w-3/4 text-center whitespace-pre-line">
                  <h2 className="text-3xl pb-10">Je remplis mon profil beauté</h2>
                  <form className="flex flex-col items-center gap-7 text-xl pb-10" onSubmit={handleSubmit}>

                    <h3 className="text-2xl font-semibold w-3/4 text-start">Informations personnelles</h3>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="lastname" className="text-start w-3/4">Nom</label>
                      <input
                        type="text"
                        name="lastname"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl capitalize disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled
                        value={session?.user.lastname}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="firstname" className="text-start w-3/4">Prénom</label>
                      <input
                        type="text"
                        name="firstname"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl capitalize disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled
                        value={session?.user.firstname}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="email" className="text-start w-3/4">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl lowercase disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled
                        value={session?.user.email}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="tel" className="text-start w-3/4">Numéro de téléphone</label>
                      <input
                        type="tel"
                        name="tel"
                        pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="date" className="text-start w-3/4">Date de naissance</label>
                      <input
                        type="date"
                        name="date"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <p className="w-3/4 text-start">Vous êtes ?</p>
                      <div
                        className="flex items-center flex-row-reverse gap-3 w-3/4"
                      >
                        <label htmlFor="man" className="text-start w-full">Un homme</label>
                        <input
                          type="radio"
                          id="man"
                          name="gender"
                          className="w-fit text-xl accent-calme-dark"
                          value="homme"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="woman" className="text-start w-full">Une femme</label>
                        <input
                          type="radio"
                          id="woman"
                          name="gender"
                          className="w-fit text-xl accent-calme-dark"
                          value="femme"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="other" className="text-start w-full">Autre</label>
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          className="w-fit text-xl accent-calme-dark"
                          value="autre"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                    </div>

                    <div
                      className="relative flex flex-col items-center w-3/4 gap-2"
                    >
                      <label htmlFor="skin" className="text-start w-full flex gap-2 items-center">
                        Quel est votre type de peau ?
                      </label>
                      <select
                        id="skin"
                        name="skin"
                        className="appearance-none w-full rounded-2xl px-5 py-3 text-lg"
                        value={skin}
                        onChange={(e) => setSkin(e.target.value)}
                      >
                        <option value="">Sélectionner :</option>
                        <option value="sèche">Sèche</option>
                        <option value="normale">Normale</option>
                        <option value="mixte">Mixte</option>
                        <option value="grasse">Grasse</option>
                        <option value="ne sais pas">Ne sais pas</option>
                      </select>
                      <ChevronDown className="absolute pointer-events-none bottom-3 right-3" />
                    </div>

                    <h3 className="text-2xl font-semibold w-3/4 text-start">Hydratation</h3>

                    <div className="flex flex-col items-center w-full gap-2">
                      <p className="w-3/4 text-start">À quelle fréquence vous hydratez-vous <b>le visage</b> ?</p>
                      <div
                        className="flex items-center flex-row-reverse gap-3 w-3/4"
                      >
                        <label htmlFor="everyDayHead" className="text-start w-full">Tous les jours</label>
                        <input
                          type="radio"
                          id="everyDayHead"
                          name="head"
                          className="w-fit text-xl accent-calme-dark"
                          value="tous les jours"
                          onChange={(e) => setFacialHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="twiceHead" className="text-start w-full">2/3 fois par semaine</label>
                        <input
                          type="radio"
                          id="twiceHead"
                          name="head"
                          className="w-fit text-xl accent-calme-dark"
                          value="2/3 fois par semaine"
                          onChange={(e) => setFacialHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="onceHead" className="text-start w-full">1 fois par semaine</label>
                        <input
                          type="radio"
                          id="onceHead"
                          name="head"
                          className="w-fit text-xl accent-calme-dark"
                          value="1 fois par semaine"
                          onChange={(e) => setFacialHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="occasionallyHead" className="text-start w-full">Occasionnellement</label>
                        <input
                          type="radio"
                          id="occasionallyHead"
                          name="head"
                          className="w-fit text-xl accent-calme-dark"
                          value="occasionnellement"
                          onChange={(e) => setFacialHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="neverHead" className="text-start w-full">Jamais</label>
                        <input
                          type="radio"
                          id="neverHead"
                          name="head"
                          className="w-fit text-xl accent-calme-dark"
                          value="jamais"
                          onChange={(e) => setFacialHydration(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <p className="w-3/4 text-start">À quelle fréquence vous hydratez-vous <b>les mains</b> ?</p>
                      <div
                        className="flex items-center flex-row-reverse gap-3 w-3/4"
                      >
                        <label htmlFor="everyDayHands" className="text-start w-full">Tous les jours</label>
                        <input
                          type="radio"
                          id="everyDayHands"
                          name="hands"
                          className="w-fit text-xl accent-calme-dark"
                          value="tous les jours"
                          onChange={(e) => setHandHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="twiceHands" className="text-start w-full">2/3 fois par semaine</label>
                        <input
                          type="radio"
                          id="twiceHands"
                          name="hands"
                          className="w-fit text-xl accent-calme-dark"
                          value="2/3 fois par semaine"
                          onChange={(e) => setHandHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="onceHands" className="text-start w-full">1 fois par semaine</label>
                        <input
                          type="radio"
                          id="onceHands"
                          name="hands"
                          className="w-fit text-xl accent-calme-dark"
                          value="1 fois par semaine"
                          onChange={(e) => setHandHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="occasionallyHands" className="text-start w-full">Occasionnellement</label>
                        <input
                          type="radio"
                          id="occasionallyHands"
                          name="hands"
                          className="w-fit text-xl accent-calme-dark"
                          value="occasionnellement"
                          onChange={(e) => setHandHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="neverHands" className="text-start w-full">Jamais</label>
                        <input
                          type="radio"
                          id="neverHands"
                          name="hands"
                          className="w-fit text-xl accent-calme-dark"
                          value="jamais"
                          onChange={(e) => setHandHydration(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <p className="w-3/4 text-start">À quelle fréquence vous hydratez-vous <b>le corps</b> ?</p>
                      <div
                        className="flex items-center flex-row-reverse gap-3 w-3/4"
                      >
                        <label htmlFor="everyDayBody" className="text-start w-full">Tous les jours</label>
                        <input
                          type="radio"
                          id="everyDayBody"
                          name="body"
                          className="w-fit text-xl accent-calme-dark"
                          value="tous les jours"
                          onChange={(e) => setBodyHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="twiceBody" className="text-start w-full">2/3 fois par semaine</label>
                        <input
                          type="radio"
                          id="twiceBody"
                          name="body"
                          className="w-fit text-xl accent-calme-dark"
                          value="2/3 fois par semaine"
                          onChange={(e) => setBodyHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="onceBody" className="text-start w-full">1 fois par semaine</label>
                        <input
                          type="radio"
                          id="onceBody"
                          name="body"
                          className="w-fit text-xl accent-calme-dark"
                          value="1 fois par semaine"
                          onChange={(e) => setBodyHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="occasionallyBody" className="text-start w-full">Occasionnellement</label>
                        <input
                          type="radio"
                          id="occasionallyBody"
                          name="body"
                          className="w-fit text-xl accent-calme-dark"
                          value="occasionnellement"
                          onChange={(e) => setBodyHydration(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="neverBody" className="text-start w-full">Jamais</label>
                        <input
                          type="radio"
                          id="neverBody"
                          name="body"
                          className="w-fit text-xl accent-calme-dark"
                          value="jamais"
                          onChange={(e) => setBodyHydration(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="products" className="text-start w-3/4">Quels sont les produits que vous utilisez pour votre visage, vos mains et votre corps ?</label>
                      <textarea
                        name="products"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={products}
                        onChange={(e) => setProducts(e.target.value)}
                      />
                    </div>

                    <h3 className="text-2xl font-semibold w-3/4 text-start">Attentes</h3>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="results" className="text-start w-3/4">Quels sont les résultats que vous aimeriez obtenir en venant à notre institut ?</label>
                      <textarea
                        name="results"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={results}
                        onChange={(e) => setResults(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="areas" className="text-start w-3/4">Y a-t-il des zones spécifiques sur lesquelles vous aimeriez vous concentrer (cernes, ventre, jambes, etc. ) ?</label>
                      <textarea
                        name="areas"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={areas}
                        onChange={(e) => setAreas(e.target.value)}
                      />
                    </div>

                    <h3 className="text-2xl font-semibold w-3/4 text-start">Préférences et Allergies</h3>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="preferences" className="text-start w-3/4">Avez-vous des préférences particulières en termes de parfum ou d'ingrédients dans les produits de beauté que nous utilisons ?</label>
                      <textarea
                        name="preferences"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={preferences}
                        onChange={(e) => setPreferences(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="allergies" className="text-start w-3/4">Avez-vous des allergies connues à certains produits ou ingrédients ?</label>
                      <textarea
                        name="allergies"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                      />
                    </div>

                    <h3 className="text-2xl font-semibold w-3/4 text-start">Expériences</h3>

                    <div className="flex flex-col items-center w-full gap-2">
                      <p className="w-3/4 text-start">Avez-vous déjà visité un institut de beauté auparavant ?</p>
                      <div
                        className="flex items-center flex-row-reverse gap-3 w-3/4"
                      >
                        <label htmlFor="yes" className="text-start w-full">Oui</label>
                        <input type="radio" id="yes" value="oui" name="choice" onChange={handleTextArea} className="w-fit text-xl accent-calme-dark" />
                      </div>
                      <div className="flex items-center flex-row-reverse gap-3 w-3/4">
                        <label htmlFor="no" className="text-start w-full">Non</label>
                        <input type="radio" id="no" value="non" name="choice" onChange={handleTextArea} className="w-fit text-xl accent-calme-dark" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="experience" className="text-start w-3/4">Si oui, quel type de services avez-vous utilisé ?</label>
                      <textarea
                        name="experience"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={!handleChoice}
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="experiences" className="text-start w-3/4">Qu'avez-vous apprécié dans vos expériences précédentes en institut de beauté ?</label>
                      <textarea
                        name="experiences"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={!handleChoice}
                        value={experiences}
                        onChange={(e) => setExperiences(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="improvements" className="text-start w-3/4">Y a-t-il quelque chose que vous avez moins apprécié ou que vous aimeriez voir amélioré dans votre expérience en institut de beauté ?</label>
                      <textarea
                        name="improvements"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl disabled:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={!handleChoice}
                        value={improvements}
                        onChange={(e) => setImprovements(e.target.value)}
                      />
                    </div>

                    <h3 className="text-2xl font-semibold w-3/4 text-start">Autres commentaires</h3>

                    <div className="flex flex-col items-center w-full gap-2">
                      <label htmlFor="remarks" className="text-start w-3/4">Y a-t-il d'autres informations que vous aimeriez partager avec nous pour nous aider à personnaliser votre expérience chez Calme ?</label>
                      <textarea
                        name="remarks"
                        className="w-3/4 rounded-2xl px-5 py-3 text-xl"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                      />
                    </div>

                    <Button type="submit">Enregistrer</Button>

                  </form>
                </div>
              </div>
            </div>

          ) : (
            <div>
              {quizzes.filter((quiz) => quiz.userId === session?.user._id).map((quiz) => (
                <div key={quiz._id}>
                  <div className="flex justify-center">
                    <div className="lg:w-3/5">
                      <h3 className="text-2xl font-semibold text-start pb-5 ps-2">Informations personnelles</h3>

                      <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                        <div>
                          <h4 className="font-bold pb-1">Nom</h4>
                          <p className="capitalize pb-4">{session?.user.lastname}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Prénom</h4>
                          <p className="capitalize pb-4">{session?.user.firstname}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Email</h4>
                          <p className="lowercase pb-4">{session?.user.email}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Numéro de téléphone</h4>
                          <p className="pb-4">{quiz.phoneNumber}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Date de naissance</h4>
                          <p className="pb-4">
                            {moment
                              .utc(quiz.birth, "YYYY-MM-DD")
                              .tz("Europe/Paris")
                              .format("DD-MM-YYYY")
                            }
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Genre</h4>
                          <p className="capitalize pb-4">{quiz.gender}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Type de peau</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.skin)}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-start py-5 ps-2">Hydratation</h3>

                      <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                        <div>
                          <h4 className="font-bold pb-1">Visage</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.facialHydration)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Mains</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.handHydration)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Corps</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.bodyHydration)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Produit(s) utilisé(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.products)}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-start py-5 ps-2">Attentes</h3>

                      <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                        <div>
                          <h4 className="font-bold pb-1">Résultat(s) souhaité(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.results)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Zone(s) à cibler</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.areas)}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-start py-5 ps-2">Préférences et Allergies</h3>

                      <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                        <div>
                          <h4 className="font-bold pb-1">Parfum(s)/ingrédient(s) souhaité(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.preferences)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Allergie(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.allergies)}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-start py-5 ps-2">Expériences</h3>

                      <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                        <div>
                          <h4 className="font-bold pb-1">Déjà visité un institut</h4>
                          <p className="capitalize pb-4">{quiz.choice}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Type de service(s) utilisé(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.experience)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Service(s) apprécié(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.experiences)}</p>
                        </div>

                        <div>
                          <h4 className="font-bold pb-1">Service(s) moins apprécié(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.improvements)}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-start py-5 ps-2">Autres commentaires</h3>

                      <div className="bg-white rounded-2xl px-5 pt-3 text-xl">
                        <div>
                          <h4 className="font-bold pb-1">Commentaire(s)</h4>
                          <p className="pb-4">{capitalizeFirstLetter(quiz.remarks)}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pt-5">
          {!loading && (
            <Footer />
          )}
        </div>
      </div>
    </>
  )
}