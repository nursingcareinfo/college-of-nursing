import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const QUICK_LINKS = [
  { label: "About Us", href: "/about/" },
  { label: "BS Nursing", href: "/bs-nursing/" },
  { label: "Admissions", href: "/admissions/" },
  { label: "Apply Online", href: "/apply/" },
  { label: "Facilities", href: "/facilities/" },
  { label: "Faculty", href: "/faculty/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
] as const;

/* Lucide doesn't ship brand icons — inline SVGs for socials */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
    </svg>
  );
}

type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

function LogoMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="40" height="40" rx="10" className="fill-primary" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        className="fill-white"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        UH
      </text>
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="text-sm font-bold leading-tight">
                  Universal Health Institute
                </p>
                <p className="text-xs text-white/70">
                  of Nursing & Allied Sciences
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Empowering the next generation of healthcare professionals with
              world-class nursing education in Karachi. Registered by PNMC,
              affiliated with LUMHS, with clinical training at Dr. Ruth K. M.
              Pfau Civil Hospital Karachi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>
                  Plot 185, Sector 4F, Mominabad, Orangi Town,
                  Karachi, Sindh, Pakistan
                </span>
              </li>
              <li>
                <a
                  href="tel:+922136740220"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal" />
                  021-3674 0220
                </a>
              </li>
              <li>
                <a
                  href="tel:+923453027788"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal" />
                  0345-302 7788
                </a>
              </li>
              <li>
                <a
              href="mailto:universalhealth.ion2015@gmail.com"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-teal" />
                universalhealth.ion2015@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map Placeholder + WhatsApp */}
          <div className="space-y-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Find Us
            </h3>
            <div className="flex h-32 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white/40">
              <MapPin className="mr-2 h-5 w-5" />
              Google Maps Embed
            </div>
            <a
              href="https://wa.me/923453027788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal/80"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {currentYear} Universal Health Institute of Nursing &
            Allied Sciences. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
