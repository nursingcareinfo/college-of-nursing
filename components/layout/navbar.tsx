"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "BS Nursing", href: "/bs-nursing/" },
  { label: "Admissions", href: "/admissions/" },
  { label: "Facilities", href: "/facilities/" },
  { label: "Faculty", href: "/faculty/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/logo.png`}
            alt=""
            className="h-9 w-auto object-contain"
          />
          <div className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight text-primary">
              UHINAS
            </span>
            <span className="block max-w-[240px] text-[0.6rem] leading-snug text-muted-foreground">
              Universal Health Institute of Nursing &amp; Allied Sciences,
              Karachi
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="/prospectus/">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Prospectus
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/apply/">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/logo.png`}
                  alt=""
                  className="h-7 w-auto object-contain"
                />
                <span>
                  UHINAS
                  <span className="block text-[0.6rem] font-normal leading-snug text-muted-foreground">
                    Universal Health Institute of Nursing &amp; Allied Sciences
                  </span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-2 px-4 pb-4">
              <Button variant="outline" asChild>
                <Link href="/prospectus/">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Prospectus
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <Link href="/apply/">Apply Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
