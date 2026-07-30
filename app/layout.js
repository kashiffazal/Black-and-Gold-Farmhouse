import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { SmoothScroll } from "../components/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Black Gold Farmhouse — Luxury Family Farmhouse Retreat",
  description: "Karachi's premier luxury farmhouse for families and celebrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          let theme = localStorage.getItem("bgf-theme") || "dark";
          if (theme === "light") {
            document.documentElement.classList.add("light");
          } else {
            document.documentElement.classList.add("dark");
          }
        `}} />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-body min-h-screen flex flex-col antialiased`}>
        <ThemeProvider>
          <SmoothScroll />
          <SiteHeader />
          <main className="flex-grow flex flex-col">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
