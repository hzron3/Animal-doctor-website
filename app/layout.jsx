import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "The Animal Doctor",
  // description: "Beyond The Unknown, To The Future",
  icons: {
    icon: "/Animal_doc_icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
