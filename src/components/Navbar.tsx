"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import content from "@/data/content.json";

export function Navbar() {
  const { navbar } = content;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkHref = (link: string) => {
    if (link.startsWith("#")) {
      return `/${link}`;
    }
    return link.startsWith("/") ? link : `/${link}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-(--color-nav-scrolled) backdrop-blur-[20px] border-(--color-border) shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="gradient-text font-bold text-xl">
              {navbar.logoName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navbar.links.map((link) => (
              <Link
                key={link.link}
                href={getLinkHref(link.link)}
                className="text-sm xl:text-base text-(--color-text-secondary) hover:text-(--color-text-heading) transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href={getLinkHref(navbar.cta.link)}
              className="px-4 py-2 xl:px-6 xl:py-2.5 text-sm xl:text-base rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              {navbar.cta.text}
            </Link>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-(--color-text-heading) p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-(--color-border) overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navbar.links.map((link) => (
                <Link
                  key={link.link}
                  href={getLinkHref(link.link)}
                  className="block text-(--color-text-secondary) hover:text-(--color-text-heading) transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Link
                href={getLinkHref(navbar.cta.link)}
                className="block w-full text-center px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navbar.cta.text}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
