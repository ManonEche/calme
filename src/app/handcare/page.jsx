import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function HandCare() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-12">Soin des mains & des pieds</h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-4/5 px-0 mx-0">
            <div>
              <Image src="/handsRound.webp" width={500} height={500} className="w-1/3 h-1/3 float-right ps-3 pb-3" />
              <div className="text-xl whitespace-pre-line pt-2">
                <p>Offrez à vos mains et à vos pieds le luxe qu'ils méritent avec notre Soin Douceur Velours. Dans un environnement paisible et raffiné, notre équipe d'experts en esthétique prendra soin de vos extrémités pour leur redonner douceur et éclat.</p>
                <br />
                <h2 className="font-bold">Étape 1 : Bain Apaisant</h2>
                <p>Plongez vos mains et vos pieds dans un bain délicieusement relaxant, enrichi en sels minéraux et en huiles essentielles, pour apaiser les muscles fatigués et hydrater la peau en profondeur.</p>
                <br />
                <h2 className="font-bold">Étape 2 : Gommage Exfoliant</h2>
                <p>Ensuite, nous exfolions délicatement la peau pour éliminer les cellules mortes et les rugosités, révélant une peau lisse et douce comme du velours. Notre gommage nourrissant revitalise et prépare vos mains et pieds à absorber les bienfaits des traitements suivants.</p>
                <br />
                <h2 className="font-bold">Étape 3 : Hydratation Intensive</h2>
                <p>Nous appliquons ensuite un masque hydratant ultra-nourrissant, infusé avec des ingrédients riches en nutriments, pour restaurer l'hydratation naturelle de votre peau et laisser vos mains et pieds incroyablement doux et souples.</p>
                <br />
                <h2 className="font-bold">Étape 4 : Massage Relaxant</h2>
                <p>Profitez d'un massage relaxant des mains et des pieds, conçu pour soulager les tensions musculaires et améliorer la circulation sanguine. Ce massage indulgent vous plongera dans un état de détente profonde et de bien-être total.</p>
                <br />
                <h2 className="font-bold">Étape 5 : Finition Parfaite</h2>
                <p>Pour terminer, nous sublimons vos mains et vos pieds avec une coupe et limage des ongles, ainsi qu'une pose de vernis ou de brillance selon vos préférences. Vous repartirez avec des mains et des pieds d'une douceur veloutée, prêts à être admirés.</p>
                <br />
                <p>Après notre Soin Douceur Velours, vos mains et vos pieds seront sublimés, hydratés et incroyablement doux. Offrez-leur le traitement qu'ils méritent et prenez rendez-vous dès aujourd'hui pour une expérience de beauté ultime dans notre institut.</p>
                <br />
                <div className="flex justify-center items-center gap-3 pt-5">
                  <Image src="/flower.webp" width={500} height={500} className="w-12" />
                  <h3 className="text-2xl text-center font-extrabold">60 mn - 50€</h3>
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