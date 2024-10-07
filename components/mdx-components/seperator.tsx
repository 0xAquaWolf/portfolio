import { ExternalLink, MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

interface SeparatorProps {
  title: string;
  link?: string;
  linkText?: string;
}

export default function SectionSeparator(props: SeparatorProps) {
  return (
    <div className="flex col-span-3 items-center gap-2 text-muted-foreground text-xs md:text-sm">
      <Separator className="flex-1" />
      <div className="flex gap-1 items-center">
        <p className="text-xs uppercase">{props.title}</p>
        {props.link && (
          <Link
            href={props.link}
            className="border rounded-lg px-3 flex items-center gap-1"
          >
            <span>{props.linkText || "more"}</span>
            <ExternalLink size={12} />
          </Link>
        )}
      </div>
      <div className="w-[8%] flex items-center justify-center">
        <Separator />
        <span className="w-1 h-1 bg-muted rotate-45 -ml-1" />
      </div>
    </div>
  );
}