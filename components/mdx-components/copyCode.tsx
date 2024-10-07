"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CodeBlockWithCopy = ({ children }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Get the pre element's text content
      const preElement = document.querySelector("pre");
      const codeElement = preElement?.querySelector("code");
      const codeToCopy = codeElement?.textContent || "";

      await navigator.clipboard.writeText(codeToCopy);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 text-xs flex gap-1 items-center top-2 p-2 rounded-lg cursor-pointer z-20 dark:bg-slate-900 dark:hover:bg-slate-700 transition-all bg-slate-100 hover:bg-slate-200"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 dark:text-gray-400 text-black/45" />
        )}
        {isCopied ? "Copied" : ""}
      </button>

      {children}
    </div>
  );
};

export default CodeBlockWithCopy;