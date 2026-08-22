import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { SectionReveal } from "@/components/shared/motion";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/shared/motion";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with UHINAS Karachi. Find our address, phone number, email, office hours, and connect via WhatsApp or social media.",
};

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Plot 185, Sector 4F, Mominabad", "Orangi Town, Karachi"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["021-36740220", "021-36740221"],
    href: "tel:+922136740220",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp / Mobile",
    lines: ["0345-3027788", "0313-4216788"],
    href: "https://wa.me/923453027788",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["universalhealth.ion2015@gmail.com"],
    href: "mailto:universalhealth.ion2015@gmail.com",
  },
];

/* Lucide doesn't ship brand icons — inline SVGs matching footer.tsx */
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

function MapPlaceholder() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light/40 via-teal/10 to-navy/5" />
      <svg
        viewBox="0 0 600 300"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--uhinas-teal)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--uhinas-navy)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="600" height="300" fill="url(#mapGrad)" />
        <circle cx="300" cy="130" r="20" fill="var(--uhinas-teal)" fillOpacity="0.2" />
        <circle cx="300" cy="130" r="8" fill="var(--uhinas-teal)" fillOpacity="0.5" />
        <line x1="100" y1="130" x2="500" y2="130" stroke="var(--uhinas-navy)" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="300" y1="30" x2="300" y2="270" stroke="var(--uhinas-navy)" strokeOpacity="0.06" strokeWidth="1" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
          <MapPin className="h-4 w-4" />
          Google Maps — swappable placeholder
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Have questions about admissions or our programs? Reach out to us
              and we will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <SectionReveal className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-light text-teal">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </CardContent>
                </>
              );

              return (
                <StaggerItem key={card.title}>
                  <Card className="h-full">
                    {card.href ? (
                      <a href={card.href} className="block h-full">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          {/* WhatsApp CTA */}
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              asChild
              className="bg-teal text-white hover:bg-teal/80"
            >
              <a
                href="https://wa.me/923453027788"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </SectionReveal>

      {/* Map Placeholder */}
      <SectionReveal className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Find Us
            </h2>
            <p className="text-muted-foreground">
              Located in Karachi, Sindh — easily accessible by public
              transport.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <MapPlaceholder />
          </div>
        </div>
      </SectionReveal>

      {/* Social Links */}
      <SectionReveal className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-navy">Follow Us</h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-teal hover:bg-teal-light hover:text-teal"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
