import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Serachbar from "@/components/Serachbar";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Provider>
            <Header/>
            <Navbar/>
            <Serachbar/>
            {children}
        </Provider>
      </body>
    </html>
  );
}
