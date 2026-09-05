"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import TerminalWindow from "./TerminalWindow";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Hero() {
  const t = useTranslations();
  const pathname = usePathname();
  const cvFile =
    pathname === "/rs" ? "Veljko_Rikalovic_CV_SR.pdf" : "Veljko_Rikalovic_CV.pdf";

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="px-4 py-24 lg:px-20 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            {t("heroKicker")}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-semibold leading-[1.15] tracking-tight text-neutral-900 dark:text-text sm:text-5xl"
          >
            <span className="block text-neutral-500 dark:text-muted">
              {t("heroHeadlineIntro")}
            </span>
            <span className="block">{t("heroHeadlineMain")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base text-neutral-600 dark:text-muted sm:text-lg"
          >
            {t("heroSubheadline")}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t("viewWork")}
            </button>

            <a
              href={`/${cvFile}`}
              download={cvFile}
              className="rounded-md border border-neutral-300 dark:border-white/20 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-text transition-colors duration-200 hover:border-primary/60 hover:text-primary"
            >
              {t("downloadCv")}
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="text-sm font-medium text-neutral-500 dark:text-muted underline underline-offset-4 decoration-neutral-300 dark:decoration-white/20 transition-colors duration-200 hover:text-primary hover:decoration-primary"
            >
              {t("getInTouch")}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
