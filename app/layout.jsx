import { allura, antic_didone, arizonia, italiana, lato, raleway, roboto, taviraj, playfair } from "./fonts";
import "./globals.css";
import ClientRoot from "./ClientRoot";

export const metadata = {
  title: 'Palace of Love SU',
}

export default function RootLayout ({children}) {
  return (
    <html lang="en"
      className={`${playfair.variable} ${allura.variable} ${antic_didone.variable} ${arizonia.variable} ${italiana.variable} ${lato.variable} ${raleway.variable} ${roboto.variable} ${taviraj.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zhk1gcr.css" />
        <link rel="stylesheet" href="https://use.typekit.net/ysh6zjx.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ClientRoot />
        <main className="grow">
          {children}
        </main>
        <footer className="border-t py-3 text-white text-center text-xs bg-[rgb(60,61,65)]">
          Developed by{' '}
          <a href="#" target="_blank"
              className="text-white hover:underline">
            Unika Analytics
          </a>
        </footer>
      </body>
    </html>
  );
}