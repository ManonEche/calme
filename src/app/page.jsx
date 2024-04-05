import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="bg-[url('/background.webp')] bg-cover bg-no-repeat bg-fixed flex flex-col min-h-screen w-screen">
        <div className="flex justify-between">
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
        <div className="flex flex-1 flex-col gap-8 justify-center items-center pb-20">
          <h1 className="text-5xl">L'institut qui prend soin de vous.</h1>
          <Link href="/home">
            <Button>Découvrir</Button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}
