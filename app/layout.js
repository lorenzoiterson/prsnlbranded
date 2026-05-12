import "./globals.css";

const SITE_URL = "https://prsnlbranded.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PRSNLBRANDED — Personal brand agency for founders & creators",
    template: "%s | PRSNLBRANDED",
  },
  description:
    "We turn experts into authority brands. From positioning to content to growth, we build the personal brand machine that makes your name pay.",
  keywords: [
    "personal branding agency",
    "personal brand strategy",
    "content agency",
    "founder branding",
    "creator agency",
    "ghostwriting",
    "LinkedIn personal brand",
    "executive personal brand",
    "personal brand for founders",
    "personal brand consultant",
    "DFY personal branding",
    "DWY content agency",
  ],
  authors: [{ name: "Lorenzo Iterson" }],
  creator: "Lorenzo Iterson",
  publisher: "PRSNLBRANDED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PRSNLBRANDED — Personal brand agency for founders & creators",
    description:
      "We turn experts into authority brands. From positioning to content to growth, we build the personal brand machine that makes your name pay.",
    url: SITE_URL,
    siteName: "PRSNLBRANDED",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/house_cars.jpg",
        width: 1200,
        height: 1500,
        alt: "PRSNLBRANDED — Personal brand agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRSNLBRANDED — Personal brand agency for founders & creators",
    description:
      "We turn experts into authority brands. From positioning to content to growth, we build the personal brand machine that makes your name pay.",
    images: ["/images/house_cars.jpg"],
    creator: "@lorenzoviter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PRSNLBRANDED",
  description:
    "We turn experts into authority brands. From positioning to content to growth, we build the personal brand machine that makes your name pay.",
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: "Lorenzo Iterson",
    jobTitle: "Founder",
    sameAs: [
      "https://www.linkedin.com/in/lorenzoiterson",
      "https://www.instagram.com/lorenzoviter",
    ],
  },
  serviceType: "Personal Branding Agency",
  areaServed: "Worldwide",
  priceRange: "€€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal branding services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PRSNL Sprint",
          description:
            "Self-paced personal brand playbook with team access via Slack.",
        },
        price: "297",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PRSNL Studio",
          description:
            "Done-with-you content production. We edit and publish, you record.",
        },
        price: "997",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PRSNL Authority",
          description:
            "Done-for-you full-stack personal brand management with on-location production.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
