import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from 'lucide-react';

export function OpenInRegistry({
  name,
  className,
}: { name: string } & React.ComponentProps<typeof Button>) {
  return (
    <a
      href={`https://asdf-4dtg3ezcs-snizhanas-projects-3a455442.vercel.app//r/${name}.json`}
      target="_blank"
      rel="noreferrer"
      className={cn("inline-block", className)}
    >
      Open registry item <ExternalLink className="inline" size={16} />
    </a>
  );
}
