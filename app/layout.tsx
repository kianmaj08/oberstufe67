import type { Metadata } from "next"
import "./globals.css"
import { GlobalNav } from "@/components/GlobalNav"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "oberstufe.site – Deine Projekte. Dein Archiv.",
  description: "Der Ort, an dem Schulprojekte wirklich ankommen.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="de">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="antialiased bg-white text-black">
          <GlobalNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
