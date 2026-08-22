import Link from "next/link";
import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-primary-foreground py-2 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2 min-w-0">
          <Megaphone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <p className="truncate font-medium">
            Admissions Open — BS Nursing 4-Year Degree Program | Apply for 2nd Batch
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="shrink-0 border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 hover:text-gold"
        >
          <Link href="/apply/">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
}
