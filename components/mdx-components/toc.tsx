import { useEffect, useState } from "react";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function TableOfContents({
  headings,
}: {
  headings: Array<{ id: string; text: string; level: number }>;
}) {
  const [toc, setToc] = useState(headings);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(true);
  const [mIsOpen, mSetIsOpen] = useState(false);

  useEffect(() => {
    setToc(headings);
  }, [headings]);

  const cleanText = (text: string) => {
    // Remove '#' and '(h1)', '(h2)' from the text
    return text.replace(/#|\s*\(h[1-6]\)/g, "").trim();
  };

  if (isDesktop) {
    return (
      <aside className="fixed top-20 right-4 w-1/4 max-w-xs">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="space-y-2"
        >
          <CollapsibleTrigger asChild>
            <div
              className="flex items-center justify-between space-x-4 px-4 cursor-pointer"
              title={isOpen ? "Collapse" : "Expand"}
            >
              <h3 className="text-lg font-bold mb-0 mt-4 pl-7">
                Table of Contents
              </h3>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className={cn("space-y-2")}>
            <ul className={cn("list-none pl-5 my-0 mb-3 mt-0")}>
              {toc.map((heading) => (
                <li
                  key={heading.id}
                  className={cn({
                    "ml-4 text-gray-400": heading.level === 2
                  })}
                >
                  <a
                    href={`#${heading.id}`}
                    className={cn("hover:underline", {
                      "text-gray-400": heading.level === 2,
                      "text-blue-600": heading.level !== 2
                    })}
                  >
                    {cleanText(heading.text)} {/* Cleaned text */}
                  </a>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </aside>
    );
  }

  return (
    <div className="border rounded-lg px-2 mb-4">
      <Collapsible
        open={mIsOpen}
        onOpenChange={mSetIsOpen}
        className="space-y-2"
      >
        <CollapsibleTrigger asChild>
          <div
            className="flex items-center justify-between cursor-pointer"
            title={isOpen ? "Collapse" : "Expand"}
          >
            <h3 className="text-lg font-bold mb-0 mt-0 pl-7">
              Table of Contents
            </h3>
            <Button variant="ghost" size="sm" className="w-9 p-0 mt-2 mb-2">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-2">
          <ul className="list-disc pl-5 my-0 mb-3 mt-0">
            {toc.map((heading) => (
              <li
                key={heading.id}
                className={cn({
                  "ml-4 text-gray-400": heading.level === 2
                })}
              >
                <a
                  href={`#${heading.id}`}
                  className={cn("hover:underline", {
                    "text-gray-400": heading.level === 2,
                    "text-blue-600": heading.level !== 2
                  })}
                >
                  {cleanText(heading.text)} {/* Cleaned text */}
                </a>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}