import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
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
                <li>Accueil</li>
                <li>Nos prestations</li>
                <li>A propos</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center pb-20">
          <h1 className="text-5xl">L'institut qui prend soin de vous.</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}
