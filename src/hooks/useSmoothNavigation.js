"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const scrollToTop = () => {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToHash = (hash) => {
  if (typeof document === "undefined") return;
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function useSmoothNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (event, href) => {
      if (!href) return;

      const normalizedHref = href.trim();

      if (event) {
        event.preventDefault();
      }

      if (normalizedHref.startsWith("/") && !normalizedHref.startsWith("#")) {
        router.push(normalizedHref);
        return;
      }

      if (normalizedHref === "/" || normalizedHref === "#home") {
        if (pathname !== "/") {
          router.push("/");
          setTimeout(scrollToTop, 200);
        } else {
          scrollToTop();
        }
        return;
      }

      if (normalizedHref.startsWith("#")) {
        if (pathname !== "/") {
          router.push(`/${normalizedHref}`);
        } else {
          scrollToHash(normalizedHref);
        }
      }
    },
    [pathname, router]
  );
}

