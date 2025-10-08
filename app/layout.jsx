import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "The Animal Doctor",
  // description: "Beyond The Unknown, To The Future",
  icons: {
    icon: "/animal-doctor-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
