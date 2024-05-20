
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";



export const metadata = {
  title: "Sak Real Estate",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

      </head>
      <body >
        <div className="w-full flex flex-col items-center justify-start">

        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
