import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Image1 from "../../public/dark_logo.png";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pinnacle Group Tuitions",
  description:
    "Welcome to Pinnacle Group Tuitions (PGT) in Airoli, where educational excellence meets personalized guidance. Specializing in JEE and NEET preparation, we take pride in nurturing the academic journeys of students aspiring for engineering, medicine.",
  keywords:
    "JEE preparation, NEET coaching, engineering entrance exams, medical entrance exams, group tuitions in Airoli, academic excellence, personalized learning, small batch sizes, holistic development, character building, Pinnacle Group Tuitions, programming languages education, technology courses, commerce education, architecture classes, experienced educators, tailored learning experience, values-based education, contributing citizens, academic mentoring.",
  url: "https://pinnaclegrouptuitions.in",
  imageUrl: "https://pinnacleseo.s3.eu-north-1.amazonaws.com/pinnaclelogo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Basic meta tags */}
        <title>{metadata.title}</title>
        <meta name='title' content={metadata.title} />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />

        {/* Open Graph meta tags */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={metadata.url} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content={metadata.imageUrl} />

        {/* Twitter meta tags */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={metadata.url} />
        <meta property='twitter:title' content={metadata.title} />
        <meta property='twitter:description' content={metadata.description} />
        <meta property='twitter:image' content={metadata.imageUrl} />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
