import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://iqraconsultancy.in"),

  title: {
    default: "IQra Consultancy | Education, Career & Technology",
    template: "%s | IQra Consultancy",
  },

  description:
    "IQra Consultancy provides education guidance, career advice and technology blogs for students, freshers and professionals.",

  // ✅ Google Site Verification (this is correct)
  verification: {
    google: "S9uzz6418zWa0JmN02ylEgcOYGAQ1booeRj1tRFU6qU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense (REQUIRED FIX) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9254478679971106"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className={`${inter.className} layout`}>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}






















// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata = {
//   // metadataBase: new URL("http://localhost:3000"),
//   metadataBase: new URL("https://iqraconsultancy.in"), // 👈 production me use karna

//   title: {
//     default: "IQra Consultancy | Education, Career & Technology",
//     template: "%s | IQra Consultancy",
//   },

//   description:
//     "IQra Consultancy provides education guidance, career advice and technology blogs for students, freshers and professionals.",

//   // ✅ Google Site Verification
//   verification: {
//      google: "S9uzz6418zWa0JmN02ylEgcOYGAQ1booeRj1tRFU6qU",
//     // "google-site-verification": "S9uzz6418zWa0JmN02ylEgcOYGAQ1booeRj1tRFU6qU"
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Google AdSense */}
//         <script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
//           crossOrigin="anonymous"
//         ></script>
//       </head>

//       <body className={`${inter.className} layout`}>
//         <Navbar />
//         <main className="main-content">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
