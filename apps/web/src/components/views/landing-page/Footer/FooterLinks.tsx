import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, Sparkles } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
  Resources: ["Documentation", "Blog", "Guides", "Help Center", "Community"],
  Company: ["About", "Careers", "Contact", "Privacy", "Terms"],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-[2fr_repeat(3,1fr)] gap-16 py-24 pb-16 border-t border-white/[0.06] max-lg:grid-cols-2 max-lg:gap-12 max-md:grid-cols-1 max-md:gap-10">
      {/* Brand Section */}
      <motion.div
        className="max-w-[22rem] max-lg:col-span-2 max-lg:max-w-full max-md:col-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Sparkles
            className="w-8 h-8 text-indigo-500"
            style={{ filter: "drop-shadow(0 0 8px currentColor)", animation: "spinSlow 8s linear infinite" }}
          />
          <span className="text-[1.75rem] font-extrabold text-[#fafafa] tracking-[-0.02em]">
            Snippetly
          </span>
        </div>
        <p className="text-[0.95rem] text-[#a1a1aa] leading-[1.7] mb-8">
          The complete creator workflow system for content generation,
          organization, and scheduling.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-[#a1a1aa] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer hover:bg-indigo-500/15 hover:border-indigo-500/30 hover:text-indigo-500 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(99,102,241,0.3)]"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Links Sections */}
      {Object.entries(footerLinks).map(([category, links], index) => (
        <motion.div
          key={category}
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-base font-bold text-[#fafafa] mb-6 tracking-[0.02em] uppercase">
            {category}
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="link-underline text-[#a1a1aa] text-[0.95rem] no-underline transition-all duration-200 hover:text-[#fafafa] hover:translate-x-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;
