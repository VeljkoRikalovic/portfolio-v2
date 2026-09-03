"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
export const dynamic = "force-dynamic";

const CONTACT_EMAIL = "velja0015@gmail.com";
const GITHUB_URL = "https://github.com/veljkorikalovic";
const LINKEDIN_URL = "https://www.linkedin.com/in/veljko-rikalovic-6515bb246/";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xblrebgn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-neutral-300 dark:border-white/15 bg-transparent px-3.5 py-2.5 text-sm text-neutral-900 dark:text-text outline-none transition-colors duration-200 focus:border-primary/60 focus:ring-1 focus:ring-primary/40";

  return (
    <div id="contact" className="px-4 py-24 lg:px-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
          {t("connect")}
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        <p className="pt-6 text-lg text-neutral-600 dark:text-muted">
          {t("connect description")}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr] items-start">
        <div className="flex flex-col gap-4">
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <FiMail className="text-xl" />
            {CONTACT_EMAIL}
          </motion.a>

          <div className="flex gap-3">
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-text transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-text transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-surface p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-text/80">
                {t("full name")}
              </label>
              <input
                type="text"
                name="name"
                className={inputClass}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-text/80">
                {t("email")}
              </label>
              <input
                type="email"
                name="email"
                className={inputClass}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-text/80">
              {t("message")}
            </label>
            <textarea
              name="message"
              className={inputClass}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-neutral-500 dark:text-muted" aria-live="polite">
              {status === "sent" && t("messageSent")}
              {status === "error" && t("messageError")}
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              <FiSend />
              {t("send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
