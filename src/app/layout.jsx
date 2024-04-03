import { AuthProvider } from "./Providers";
import { Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'sonner';

const cormorantGaramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: "Calme",
  description: "L'institut qui prend soin de vous.",
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
