import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Registration() {
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
                  <Link href="/services">
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
                  <h1 className="text-5xl pb-10">Inscription</h1>
                  <form className="flex flex-col items-center gap-4">
                    <input type="text" name="lastname" placeholder="Nom" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="text" name="firstname" placeholder="Prénom" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="email" name="email" placeholder="Email" className="w-3/4 rounded-2xl px-5 py-3 text-xl bg-calme-light" required />
                    <input type="password" name="password" placeholder="Mot de passe" className="w-3/4 rounded-2xl px-5 py-3 text-xl mb-10 bg-calme-light" required />
                  </form>
                  <Button>S'inscrire</Button>
                  <Link href="/login">
                    <p className="text-2xl pt-8">Déjà inscrit(e) ? <strong>Connectez-vous</strong></p>
                  </Link>
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