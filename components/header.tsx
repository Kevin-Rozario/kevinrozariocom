"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

interface HeaderProps {
  activePage?: "home" | "work" | "moments" | "notes" | "connect";
}

export default function Header({ activePage }: HeaderProps) {
  const navigationLinks = [
    { href: "/", label: "Home", key: "home" },
    { href: "/work", label: "Work", key: "work" },
    { href: "/moments", label: "Moments", key: "moments" },
    { href: "/notes", label: "Notes", key: "notes" },
    { href: "/connect", label: "Connect", key: "connect" },
  ] as const;

  const activeLinkClass = (key: string) =>
    `font-medium relative shrink-0 text-sm transition-all ${
      activePage === key
        ? "text-taupe-800 dark:text-taupe-100 font-semibold"
        : "text-taupe-500 dark:text-taupe-400 hover:text-taupe-800 dark:hover:text-taupe-100"
    }`;

  return (
    <header className="relative flex w-full shrink-0 flex-col items-start gap-4">
      {/* Profile Image */}
      <Link
        href="/"
        className="relative flex h-10 w-full shrink-0 items-center justify-start"
        aria-label="Go to home"
      >
        <Avatar size="lg">
          <AvatarImage src="/kevin.png" loading="eager" />
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>
      </Link>

      {/* Name */}
      <Link
        href="/"
        className="flex h-6 w-full items-center gap-1 transition-opacity hover:opacity-70"
        aria-label="Kevin Rozario home"
      >
        <h1 className="text-xl font-bold tracking-tight text-taupe-800 dark:text-taupe-100">
          Kevin Rozario
        </h1>
      </Link>

      {/* Navigation */}
      <nav
        className="relative flex w-full shrink-0 items-center gap-4"
        aria-label="Main navigation"
      >
        {navigationLinks.map(({ href, label, key }) => (
          <Link key={key} href={href} className={activeLinkClass(key)}>
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
