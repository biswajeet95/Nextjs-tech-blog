import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.iqraconsultancy.in"),

  title: {
    default: "IQra Consultancy | Education, Career & Technology",
    template: "%s | IQra Consultancy",
  },

  description:
    "IQra Consultancy provides education guidance, career advice and technology blogs for students, freshers and professionals.",

  verification: {
    google: "Kfl7JqX66cQ1LZOkJFYDZgjgt6wI4DjTKv7rRJYFWqQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-9254478679971106"
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9254478679971106"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={`${inter.className} layout`}>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
