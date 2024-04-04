import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-calme-medium min-h-screen w-screen">
        <div>
          <div className="absolute z-30 flex justify-between w-screen">
            <div className="flex items-center gap-2 p-5">
              <Image src="/logo.webp" width={100} height={100} />
              <Image src="/brand.webp" width={100} height={100} />
            </div>
            <div className="py-5 px-8">
              <nav>
                <ul className="flex gap-3 text-xl">
                  <Link href="/home">
                    <li>Accueil</li>
                  </Link>
                  <Link href="">
                    <li>Nos prestations</li>
                  </Link>
                  <Link href="">
                    <li>A propos</li>
                  </Link>
                  <Link href="">
                    <li>Contact</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-1 justify-center items-center">
                <div className="w-3/4 text-center whitespace-pre-line pt-28">
                  <h1 className="text-5xl pb-5">Accéder à votre profil beauté</h1>
                  <p className="text-2xl p-8">Dévoilez votre éclat naturel en créant votre profil beaute sur mesure avant votre prochain rendez-vous à notre institut.</p>
                  <Button>Se connecter</Button>
                  <p className="text-2xl p-8">Pas de compte ? <strong>Inscrivez-vous</strong></p>
                </div>
              </div>
              <Footer />
            </div>
            <div className="relative z-10 bg-right bg-[url('/home.webp')] bg-cover bg-no-repeat w-1/2 h-screen">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}