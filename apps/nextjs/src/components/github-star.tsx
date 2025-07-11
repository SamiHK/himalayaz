"use client";

import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";

export function GitHubStar() {
  return (
    <Link
      href="https://github.com/saasfly/saasfly"
      target="_blank"
      rel="Saasfly GitHub"
    >
      <div className="inline-flex h-9 items-center gap-1.5 rounded-full border border-input px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
        <Icons.GitHub className="h-4 w-4" />
        <span>2.5K</span>
      </div>
    </Link>
  );
}
