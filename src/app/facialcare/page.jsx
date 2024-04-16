import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function FacialCare() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-12">Soin du visage</h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-4/5 px-0 mx-0">
            <div>
              <Image src="/faceRound.webp" width={500} height={500} className="w-1/3 h-1/3 float-right ps-3 pb-3" alt="Soin du visage" />
              <div className="text-xl whitespace-pre-line pt-2">
                <p>Offrez à votre peau un éclat radieux avec notre soin du visage Éclat de Soie, conçu pour revitaliser, hydrater et illuminer votre teint. Notre équipe d'esthéticiennes expérimentées vous accueille dans un cadre apaisant et luxueux, où vous pourrez vous détendre et profiter d'une expérience de soin sur mesure.</p>
                <br />
                <h2 className="font-bold">Étape 1 : Diagnostic de la Peau</h2>
                <p>Nous commençons par un diagnostic approfondi de votre peau pour identifier ses besoins spécifiques et personnaliser le traitement en conséquence. Que votre peau soit sèche, grasse, sensible ou sujette aux imperfections, nous adaptons chaque étape du soin pour répondre à ses besoins uniques.</p>
                <br />
                <h2 className="font-bold">Étape 2 : Nettoyage en Profondeur</h2>
                <p>Le soin débute par un nettoyage doux mais efficace pour éliminer les impuretés, l'excès de sébum et les résidus de maquillage. Nous utilisons des produits de qualité supérieure adaptés à votre type de peau, laissant votre épiderme frais et purifié.</p>
                <br />
                <h2 className="font-bold">Étape 3 : Exfoliation et Gommage</h2>
                <p>Ensuite, nous procédons à une exfoliation délicate pour éliminer les cellules mortes de la peau et révéler un teint plus lumineux et éclatant. Notre gommage raffiné favorise le renouvellement cellulaire et stimule la circulation, laissant votre peau douce et soyeuse.</p>
                <br />
                <h2 className="font-bold">Étape 4 : Massage Relaxant</h2>
                <p>Détendez-vous pendant que nos esthéticiennes expertes vous offrent un massage facial apaisant. Ce massage doux améliore la circulation sanguine, décongestionne les tissus et réduit les tensions musculaires, vous procurant une sensation de bien-être profond.</p>
                <br />
                <h2 className="font-bold">Étape 5 : Masque Hydratant</h2>
                <p>Nous appliquons ensuite un masque hydratant intensif, formulé avec des ingrédients nourrissants et revitalisants pour restaurer l'hydratation naturelle de votre peau. Ce masque laisse votre visage radieux, souple et revitalisé.</p>
                <br />
                <h2 className="font-bold">Étape 6 : Sérum et Hydratation</h2>
                <p>Pour terminer, nous appliquons un sérum concentré et une crème hydratante adaptés à votre type de peau, pour sceller les bienfaits du traitement et laisser votre peau éclatante de santé.</p>
                <br />
                <p>Après notre soin du visage Éclat de Soie, votre peau rayonnera de fraîcheur et d'éclat. Vous vous sentirez détendu(e), revitalisé(e) et prêt(e) à affronter le monde avec confiance. Prenez rendez-vous dès aujourd'hui pour une expérience de beauté inoubliable dans notre institut.</p>
                <br />
                <div className="flex justify-center items-center gap-3 pt-5">
                  <Image src="/flower.webp" width={500} height={500} className="w-12" alt="Fleur" />
                  <h3 className="text-2xl text-center font-extrabold">90 mn - 75€</h3>
                  <Image src="/flower.webp" width={500} height={500} className="w-12" alt="Fleur"/>
                </div>
              </div>
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