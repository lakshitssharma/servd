import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from '@clerk/ui/themes'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "AI Powered Recipe platform for developers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: neobrutalism,
      }}
    >
      <html

        lang="en" suppressHydrationWarning
      >
        <body className={`${inter.classname} `}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex justify-center items-center">
              <p className="text-stone-500 text-sm">Made with by 💝 Lakshit Sharma</p>
            </div>
          </footer>
        </body>

      </html>
    </ClerkProvider>
  );
}
