import { AuthProvider } from "./Providers";
import { Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'sonner';
import { host } from "./sitemap";

const cormorantGaramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  metadataBase: new URL(host),
  title: "Calme",
  description: "L'institut qui prend soin de vous.",
  keywords: ["calme", "développement web", "apprentissage", "institut", "beaute", "soin", "front-end", "back-end", "full-stack", "web", "web development", "web developer"],

  icons: {
    icon: "/favicon.ico"
  },

  openGraph: {
    type: "website",
    url: host,
    title: "L'institut qui prend soin de vous.",
    siteName: "Calme",
    description:
      "L'institut qui vous offre une oasis de tranquillité où chaque détail est pensé pour votre bien-être absolu.",
    images: [
      {
        url: `${host}social.webp`,
        width: 1200,
        height: 630,
        alt: "Calme carte sociale",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={cormorantGaramond.className}>
      <body className="bg-calme-light text-calme-dark">
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
