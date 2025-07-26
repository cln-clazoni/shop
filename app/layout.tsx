import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { InstrumentType } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

const isProd = process.env.NEXT_PUBLIC_ENV === 'production';
const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '';

export const metadata = {
  title: `CLN – Clazoni | Tienda de Instrumentos Musicales en Bolivia`,
  description:
    'Descubre guitarras, teclados, baterías y más en CLN Clazoni. Tu tienda de instrumentos musicales en Bolivia con envíos a todo el país.',
  keywords: [
    'instrumentos musicales',
    'guitarras Bolivia',
    'tienda instrumentos musicales',
    'pianos digitales',
    'baterías musicales',
    'tienda musical online',
    'Clazoni',
    'CLN',
    'instrumentos La Paz',
  ],
  metadataBase: new URL('https://cln-clazoni.github.io'),
  alternates: {
    canonical: 'https://cln-clazoni.github.io/shop/',
  },
  icons: {
    icon: `${basePath}/favicon.ico`,
    shortcut: `${basePath}/favicon.ico`,
    apple: `${basePath}/images/tiendaCLN.png`,
  },
  openGraph: {
    title: 'CLN – Clazoni | Instrumentos Musicales en Bolivia',
    description:
      'Explora guitarras, teclados, baterías, vientos y más. Compra online y recibe en todo Bolivia.',
    url: 'https://cln-clazoni.github.io/shop/',
    siteName: 'CLN – Clazoni',
    type: 'website',
    locale: 'es_BO',
    images: [
      {
        url: 'https://cln-clazoni.github.io/shop/images/tiendaCLN.png',
        width: 1200,
        height: 630,
        alt: 'CLN – Clazoni tienda de instrumentos musicales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLN – Clazoni | Instrumentos Musicales en Bolivia',
    description:
      'Tienda de instrumentos musicales en línea. Guitarras, pianos, vientos, baterías y más.',
    images: ['https://cln-clazoni.github.io/shop/images/tiendaCLN.png'],
    site: '@clazonimusic', // opcional si tienes cuenta X (Twitter)
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  category: 'Instrumentos Musicales, Tienda Online, Música, Bolivia',
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getInstrumentsTypes = async (): Promise<InstrumentType[]> => {
    const res = await fetch(
      "https://n8n-proyect.onrender.com/webhook/cln/instrumentos/tipos"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
  const instrumentTypes = await getInstrumentsTypes();

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header instrumentCategories={instrumentTypes} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
