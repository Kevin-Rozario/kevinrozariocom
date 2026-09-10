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

export const metadata: Metadata = {
  title: "Kevin Rozario - Developer",
  description: "Portfolio website built with Next.js",
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
