"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import content from "@/data/content.json";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { contact } = content;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Auto-reset success state after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 5000);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return Mail;
      case "Phone":
        return Phone;
      case "MapPin":
        return MapPin;
      case "Github":
        return Github;
      case "Linkedin":
        return Linkedin;
      case "Twitter":
        return Twitter;
      case "Instagram":
        return Instagram;
      default:
        return Mail;
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 uppercase tracking-wider">
            {contact.sectionTitle}
          </span>
          <h2 className="mt-4 gradient-text">{contact.headline}</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{contact.infoTitle}</h3>
              <div className="space-y-6">
                {contact.infoItems.map((info) => {
                  const Icon = getIcon(info.icon);
                  return (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-start gap-3 sm:gap-4 group hover:translate-x-2 transition-transform"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-xs sm:text-sm text-slate-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors break-all sm:break-normal">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-slate-400 mb-4">{contact.socialTitle}</p>
                <div className="flex gap-3">
                  {contact.socialLinks.map((social) => {
                    const SocialIcon = getIcon(
                      social.icon === "github"
                        ? "Github"
                        : social.icon === "linkedin"
                        ? "Linkedin"
                        : social.icon === "twitter"
                        ? "Twitter"
                        : "Instagram"
                    );
                    return (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-white/20 transition-all group"
                        aria-label={social.platform}
                      >
                        <SocialIcon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white">Available for Work</span>
              </div>
              <p className="text-sm text-slate-400">
                Currently accepting new projects and freelance opportunities.
                Let&apos;s create something amazing together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder={contact.form.namePlaceholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder={contact.form.emailPlaceholder}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder={contact.form.subjectPlaceholder}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                    placeholder={contact.form.messagePlaceholder}
                  />
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
                      status === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    {statusMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  className="w-full px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>{contact.form.buttonText}</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
