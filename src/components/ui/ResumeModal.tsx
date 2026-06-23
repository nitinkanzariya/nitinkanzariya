"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Download } from "lucide-react";

export function ResumeModal({
  resumeLink,
  children,
}: {
  resumeLink: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[90vh] flex flex-col p-0 glass-strong border-(--color-border) gap-0 overflow-hidden bg-(--color-bg)/95">
        <DialogHeader className="p-4 sm:px-6 border-b border-(--color-border) flex flex-row items-center justify-between">
          <DialogTitle className="text-(--color-text-heading) text-xl">
            My Resume
          </DialogTitle>
          <div className="mr-8">
            <a
              href={resumeLink}
              download="NitinKanzariya_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
          </div>
        </DialogHeader>
        <div className="flex-1 w-full relative bg-(--color-surface)">
          <iframe
            src={`${resumeLink}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
