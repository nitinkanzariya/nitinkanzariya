"use client";

import { motion } from "motion/react";
import { Code2, Heart } from "lucide-react";
import Link from "next/link";
import content from "@/data/content.json";

export function Footer() {
  const { footer } = content;
  const currentYear = new Date().getFullYear();

  const getLinkHref = (link: string) => {
    if (link.startsWith("#")) {
      return `/${link}`;
    }
    return link.startsWith("/") ? link : `/${link}`;
  };

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 group mb-4 hover:scale-105 transition-transform transform origin-left"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="gradient-text">{footer.logoName}</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">{footer.description}</p>
          </div>

          {/* Quick Links & Contact Info */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h5 className="text-white mb-4">{footer.quickLinksTitle}</h5>
              <ul className="space-y-2">
                {footer.quickLinks.map((link) => (
                  <li key={link.link}>
                    <Link
                      href={getLinkHref(link.link)}
                      className="text-slate-400 hover:text-white text-sm transition-colors inline-block hover:translate-x-1 transform duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-white mb-4">{footer.contactInfoTitle}</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>{footer.contactInfo.location}</li>
                <li>
                  <a
                    href={`mailto:${footer.contactInfo.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {footer.contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footer.contactInfo.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {footer.contactInfo.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 flex items-center gap-2">
              © {currentYear} {footer.copyright} {footer.madeWith.text}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              {footer.madeWith.and}
              <Code2 className="w-4 h-4 text-blue-400" />
            </p>
            <p className="text-sm text-slate-400">{footer.techStack}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
