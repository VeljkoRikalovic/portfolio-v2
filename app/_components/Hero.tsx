"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
    <div className="relative min-h-screen flex items-center overflow-hidden px-4 py-32 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/10 blur-[100px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {t("heroBadge")}
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-text"
        >
          {t("heroHeadlinePrefix")}{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t("heroHeadlineHighlight")}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-muted leading-relaxed"
        >
          {t("heroSubheadline")}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            {t("viewWork")}
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-white/15 px-6 py-3 font-medium text-neutral-900 dark:text-text transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            {t("getInTouch")}
          </button>

          <a
            href={`/${cvFile}`}
            download={cvFile}
            className="inline-flex items-center gap-2 px-2 py-3 font-medium text-neutral-600 dark:text-muted transition-colors duration-300 hover:text-primary"
          >
            <FiDownload />
            {t("downloadCv")}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
