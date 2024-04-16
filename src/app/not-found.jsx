import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <div className="flex flex-col justify-center items-center gap-12 mt-40">
          <Image src="/error.webp" width={1000} height={1000} className="me-2 w-2/5" alt="Erreur" />
          <p className="text-2xl text-center">Désolé, cette page s'est évaporée tel un doux parfum.</p>
        </div>
        <div className="absolute bottom-0 left-0">
          <Footer />
        </div>
      </div>
    </>
  )
}