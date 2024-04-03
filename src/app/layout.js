import "./globals.css";

export const metadata = {
  title: "Calme",
  description: "L'institut qui prend soin de vous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
