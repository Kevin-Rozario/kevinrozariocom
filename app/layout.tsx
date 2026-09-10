import type { Metadata } from "next";
import { Alex_Brush, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kevinrozario.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kevin Rozario - Software Engineer, Builder",
    template: "%s | Kevin Rozario",
  },
  description:
    "Backend-leaning software engineer building with Node.js, TypeScript, and the MERN stack. Freelancer, builder, and part-time financial planner.",
  openGraph: {
    title: "Kevin Rozario",
    description:
      "Backend-leaning software engineer building with Node.js, TypeScript, and the MERN stack. Freelancer, builder, and part-time financial planner.",
    url: siteUrl,
    siteName: "Kevin Rozario",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Rozario - Software Engineer, Builder.",
    description:
      "Backend-leaning software engineer building with Node.js, TypeScript, and the MERN stack. Freelancer, builder, and part-time financial planner.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        schibstedGrotesk.variable,
        alexBrush.variable,
        "h-full font-sans antialiased",
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen w-full justify-center bg-taupe-100 py-10 dark:bg-taupe-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="m-0 flex w-full max-w-xl flex-col items-center gap-6 px-4">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
