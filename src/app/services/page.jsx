import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <Header />
        <h1 className="text-5xl text-center mt-11 mb-16">Nos prestations</h1>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-4/5 gap-10">

            <Link href="/facialcare">
              <div className="flex flex-col justify-center items-center gap-6">
                <Image src="/faceArch.webp" width={1000} height={1000} />
                <h2 className="text-center text-2xl uppercase px-3 h-5">Soin du visage</h2>
              </div>
            </Link>

            <Link href="">
              <div className="flex flex-col justify-end items-center gap-6">
                <Image src="/handsArch.webp" width={1000} height={1000} />
                <h2 className="text-center text-2xl uppercase px-3 h-5">Soin des mains & des pieds</h2>
              </div>
            </Link>

            <Link href="">
              <div className="flex flex-col justify-center items-center gap-6">
                <Image src="/bodyArch.webp" width={1000} height={1000} />
                <h2 className="text-center text-2xl uppercase px-3 h-5">Soin du corps</h2>
              </div>
            </Link>

          </div>
        </div>
        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </>
  )
}