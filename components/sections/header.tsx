/**
 * @file header.tsx
 * @description Application Header/Navbar component with responsive design.
 * Features scroll-aware styling, navigation links, and theme toggle.
 * @module components/sections/header
 */

"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Github, Menu, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 md:top-6 md:left-6 md:right-6"
    >
      <nav
        className={`mx-auto px-6 py-4 rounded-2xl flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-2xl border border-foreground/10 shadow-2xl"
            : "bg-background/20 backdrop-blur-xl border border-foreground/5"
        }`}
      >
        {/* Logo */}
        {/** biome-ignore lint/a11y/useSemanticElements: interactive div used for complex logo layout */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0 bg-foreground/5 dark:bg-surface rounded-xl overflow-hidden border border-border/50 shadow-sm">
            <Image
              src="/icon.png"
              alt="mpvEx Logo"
              width={40}
              height={40}
              priority
              className="object-cover"
            />
          </div>
          <span className="hidden sm:inline-block text-foreground font-bold text-lg tracking-tight">
            mpvEx
          </span>
        </div>

        {/* Desktop Navigation - Absolute Center */}
        <div className="hidden lg:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          {[
            { name: "Features", href: "#features" },
            { name: "Screenshots", href: "#screenshots" },
            { name: "Contributors", href: "#contributors" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors text-sm px-4 py-2 hover:bg-foreground/5 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(item.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Star on GitHub */}
          <button
            onClick={() => window.open(siteConfig.links.github, "_blank")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm text-foreground/80 hover:text-foreground"
          >
            <Star className="w-4 h-4" />
            <span className="hidden sm:inline">Star</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* GitHub Link */}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground/80 hover:text-foreground"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Download Button */}
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
            onClick={() =>
              window.open(siteConfig.links.latestRelease, "_blank")
            }
          >
            Download
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-2xl py-4 px-6 relative z-50"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Screenshots
            </Link>
            <Link
              href="#contributors"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contributors
            </Link>
            <div className="flex gap-2 pt-2">
              <div className="flex-1 flex justify-center">
                <ThemeToggle />
              </div>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  window.open(siteConfig.links.latestRelease, "_blank");
                  setIsOpen(false);
                }}
              >
                Download
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
