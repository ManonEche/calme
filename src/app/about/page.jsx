import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-12">À propos</h1>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center w-4/5 text-xl whitespace-pre-line pt-2">
            <p>Bienvenue dans notre institut de beauté, un sanctuaire dédié à la relaxation, à la régénération et à la révélation de votre beauté naturelle. Nous sommes fiers de vous offrir une expérience exceptionnelle où chaque visite est une escapade sensorielle vers le bien-être et la revitalisation.</p>
            <br />
            <p>Chez nous, nous croyons en l'importance de prendre soin de soi, à la fois à l'intérieur et à l'extérieur. C'est pourquoi notre équipe d'esthéticiennes hautement qualifiées et passionnées travaille avec dévouement pour répondre à vos besoins individuels et vous offrir des soins personnalisés qui vous laisseront sentir revitalisé(e) et rajeuni(e).</p>
            <br />
            <p>Que vous veniez pour un soin du visage apaisant, un massage relaxant, ou une manucure et une pédicure luxueuses, notre objectif est de vous offrir une expérience de beauté inoubliable qui dépasse vos attentes. Nous utilisons uniquement les meilleurs produits de soin de la peau et de beauté, soigneusement sélectionnés pour leurs ingrédients de qualité et leur efficacité éprouvée.</p>
            <br />
            <p>Au-delà de notre engagement envers la beauté extérieure, nous nous engageons également à créer un environnement accueillant, chaleureux et respectueux où vous vous sentez détendu(e) et choyé(e) dès que vous franchissez nos portes. Chaque détail de notre institut a été pensé pour créer une atmosphère de calme et de tranquillité, où vous pouvez vous échapper du stress de la vie quotidienne et vous recentrer sur vous-même.</p>
            <br />
            <p>Que vous cherchiez une pause bien méritée ou que vous souhaitiez vous préparer pour une occasion spéciale, nous sommes là pour vous aider à atteindre vos objectifs de beauté et de bien-être. Venez nous rendre visite et laissez-nous vous guider vers une expérience de beauté et de détente incomparable.</p>
            <br />
            <div className="flex justify-center items-center pt-5">
              <Image src="/line.webp" width={1000} height={1000} className="w-2/6" />
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