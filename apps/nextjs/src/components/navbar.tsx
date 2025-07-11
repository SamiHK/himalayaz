"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import type { User } from "@saasfly/auth";
import { cn } from "@saasfly/ui";
import { Button } from "@saasfly/ui/button";

import { GitHubStar } from "~/components/github-star";
import { LocaleChange } from "~/components/locale-change";
import useScroll from "~/hooks/use-scroll";
import { useSigninModal } from "~/hooks/use-signin-modal";
import type { MainNavItem } from "~/types";
import { MainNav } from "./main-nav";
import { UserAccountNav } from "./user-account-nav";

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Record<string, string | object>;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  const segment = useSelectedLayoutSegment();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav
          items={items}
          params={{ lang: `${lang}` }}
          marketing={marketing}
        >
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : `/${lang}${item.href}`}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "font-semibold text-blue-500"
                      : "",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="h-8 w-[1px] bg-accent"></div>

          {rightElements}

          <div className="hidden md:flex lg:flex xl:flex">
            <GitHubStar />
          </div>
          <LocaleChange url={"/"} />
          {!user ? (
            <Link href={`/${lang}/login-clerk`}>
              <Button variant="outline" size="sm">
                {typeof marketing.login === "string"
                  ? marketing.login
                  : "Default Login Text"}
              </Button>
            </Link>
          ) : null}

          {user ? (
            <UserAccountNav
              user={user}
              params={{ lang: `${lang}` }}
              dict={dropdown}
            />
          ) : (
            <Button
              className="px-3"
              variant="default"
              size="sm"
              onClick={signInModal.onOpen}
            >
              {typeof marketing.signup === "string"
                ? marketing.signup
                : "Default Signup Text"}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
