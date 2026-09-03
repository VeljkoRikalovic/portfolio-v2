"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const stack = [
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: undefined },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function TechStack() {
  const t = useTranslations();

  return (
    <div className="w-full py-8 lg:py-12">
      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
        {t("Skills")}
        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </h2>
      <p className="pt-6 max-w-xl text-lg text-neutral-600 dark:text-muted">
        {t("techStackSubtitle")}
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
      >
        {stack.map(({ name, Icon, color }) => (
          <motion.div
            key={name}
            variants={item}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-surface p-6 text-center transition-colors duration-300 hover:border-primary/40"
          >
            <Icon
              className="text-4xl grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 text-neutral-900 dark:text-white"
              style={color ? { color } : undefined}
            />
            <span className="text-sm font-medium text-neutral-700 dark:text-text/90">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechStack;
