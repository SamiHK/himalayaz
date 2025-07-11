"use client";

import { useState } from "react";

import * as Icons from "@saasfly/ui/icons";

export function CodeCopy() {
  const [copied, setCopied] = useState(false);
  const command = "bun create saasfly";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex h-12 max-w-xl items-center justify-between rounded-full bg-neutral-200 px-3 dark:bg-neutral-700/40">
      <div className="flex items-center space-x-2 font-mono text-neutral-700 dark:text-neutral-300">
        <span>$</span>
        <span>{command}</span>
      </div>
      <button
        onClick={copyToClipboard}
        className="ml-2 rounded-md p-1.5 transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Icons.Check className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
        ) : (
          <Icons.Copy
            className={`h-4 w-4 text-neutral-700 dark:text-neutral-300`}
          />
        )}
      </button>
    </div>
  );
}
