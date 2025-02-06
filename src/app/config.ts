import { type Metadata, type Viewport } from "next"

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: {
    template: "%s | Abubakir Shavkatov",
    default: "Abubakir Shavkatov | Software Engineer & Web Developer",
  },
  description:
    "Welcome to the digital realm of Abubakir Shavkatov, also known as Warnigo.",
  icons: "https://warnigo.uz/avatar.webp",
  keywords: [
    "Abubakir Shavkatov",
    "Warnigo",
    "Web Developer",
    "Frontend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Abubakir Shavkatov" }, { name: "Warnigo" }],
  creator: "Abubakir Shavkatov (Warnigo)",
  publisher: "Abubakir Shavkatov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://warnigo.uz",
    title: "Abubakir Shavkatov | Software Engineer & Web Developer",
    description: "Explore my portfolio of web development and creative coding.",
    images: [
      {
        url: "https://warnigo.uz/avatar.webp",
        width: 1200,
        height: 630,
        alt: "Abubakir Shavkatov (Warnigo)",
      },
    ],
  },
  verification: { google: "", yandex: "" },
  alternates: {
    canonical: "https://warnigo.uz",
    languages: { en: "/en", ru: "/ru", uz: "/uz" },
  },
}

// Viewport configuration for responsive design
export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  width: "device-width",
}
