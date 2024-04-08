import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-calme-medium">
        <div className="flex justify-between items-center w-screen">
          <div className="flex items-center gap-2 px-3 py-1">
            <Image src="/logo.webp" width={60} height={60} />
            <Image src="/brand.webp" width={100} height={100} />
          </div>
          <div className="py-5 pe-8">
            <nav>
              <ul className="flex gap-3 text-xl">
                <Link href="/home">
                  <li>Accueil</li>
                </Link>
                <Link href="/services">
                  <li>Nos prestations</li>
                </Link>
                <Link href="/about">
                  <li>À propos</li>
                </Link>
                <Link href="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}