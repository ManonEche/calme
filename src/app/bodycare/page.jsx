import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function BodyCare() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-12">Soin du corps</h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-4/5 px-0 mx-0">
            <div>
              <Image src="/bodyRound.webp" width={500} height={500} className="w-1/3 h-1/3 float-right ps-3 pb-3" />
              <div className="text-xl whitespace-pre-line pt-2">
                <p>Détendez-vous et revitalisez votre corps avec notre Soin Harmonie Divine, une expérience luxueuse conçue pour vous transporter dans un état de bien-être absolu. Dans notre oasis de calme et de sérénité, notre équipe dévouée vous offre un traitement personnalisé pour nourrir votre peau et apaiser votre esprit.</p>
                <br />
                <h2 className="font-bold">Étape 1 : Bain Aromatique</h2>
                <p>Commencez par vous immerger dans un bain aromatique délicieusement parfumé, imprégné d'huiles essentielles apaisantes pour détendre vos muscles et éveiller vos sens. Laissez-vous envelopper par les douces vapeurs et laissez vos soucis s'évaporer.</p>
                <br />
                <h2 className="font-bold">Étape 2 : Gommage Exfoliant</h2>
                <p>Ensuite, profitez d'un gommage exfoliant riche en minéraux et en extraits botaniques pour éliminer les impuretés de la peau et révéler une peau douce et lisse. Ce traitement exfoliant favorise le renouvellement cellulaire, laissant votre peau radieuse et éclatante.</p>
                <br />
                <h2 className="font-bold">Étape 3 : Enveloppement Hydratant</h2>
                <p>Après l'exfoliation, votre corps est enveloppé dans un masque hydratant somptueux, infusé d'ingrédients nourrissants tels que le beurre de karité et les huiles essentielles, pour hydrater en profondeur et revitaliser votre peau, lui redonnant souplesse et élasticité.</p>
                <br />
                <h2 className="font-bold">Étape 4 : Massage Relaxant</h2>
                <p>Détendez-vous sous les mains expertes de nos thérapeutes lors d'un massage relaxant du corps entier. Ce massage personnalisé soulage les tensions musculaires, stimule la circulation sanguine et favorise un sentiment de bien-être total, vous laissant détendu(e) et revitalisé(e).</p>
                <br />
                <h2 className="font-bold">Étape 5 : Hydratation Finale</h2>
                <p>Pour terminer, une hydratation finale est appliquée sur votre peau, laissant une sensation de douceur soyeuse et un éclat naturel. Votre corps est nourri en profondeur, revitalisé et prêt à affronter le monde avec confiance.</p>
                <br />
                <p>Après notre Soin Harmonie Divine, votre corps est enveloppé d'une sensation de bien-être profond et votre peau est douce, lumineuse et éclatante de santé. Offrez-vous cette expérience de luxe et prenez rendez-vous dès aujourd'hui pour une détente totale dans notre institut.</p>
                <br />
                <div className="flex justify-center items-center gap-3 pt-5">
                  <Image src="/flower.webp" width={500} height={500} className="w-12" />
                  <h3 className="text-2xl text-center font-extrabold">90 mn - 75€</h3>
                  <Image src="/flower.webp" width={500} height={500} className="w-12" />
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