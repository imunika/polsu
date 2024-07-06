import { antic_didone, arizonia, italiana, lato } from "./fonts";
import "./globals.css";
import ClientRoot from "./ClientRoot";

// export default function RootLayout ({children, metadata}) {
export default function RootLayout ({children}) {
  return (
    <html lang="en"
      className={`${antic_didone.variable} ${arizonia.variable} ${italiana.variable} ${lato.variable}`}>
      {/* <head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
      </head> */}
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