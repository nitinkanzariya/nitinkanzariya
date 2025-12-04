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
} from "lucide-react";
import content from "../data/content.json";

export function Contact() {
  const { contact } = content;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
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
            <div className="glass-strong rounded-3xl p-8 border border-white/10">
              <h3 className="text-white mb-6">{contact.infoTitle}</h3>
              <div className="space-y-6">
                {contact.infoItems.map((info) => {
                  const Icon = getIcon(info.icon);
                  return (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                    >
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-white group-hover:text-blue-400 transition-colors">
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
                  {contact.socialLinks.map((social) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-white/20 transition-all group"
                      aria-label={social.platform}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${social.icon}`}
                        alt={social.platform}
                        className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity invert"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white">Available for Work</span>
              </div>
              <p className="text-sm text-slate-400">
                Currently accepting new projects and freelance opportunities.
                Let's create something amazing together!
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
              className="glass-strong rounded-3xl p-8 border border-white/10"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={contact.form.namePlaceholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={contact.form.emailPlaceholder}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={contact.form.subjectPlaceholder}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-slate-300 mb-2"
                  >
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder={contact.form.messagePlaceholder}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{contact.form.buttonText}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
