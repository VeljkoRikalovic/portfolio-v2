"use client";
import { motion } from "framer-motion";

type Line = {
  type: "command" | "output" | "success";
  text: string;
};

const lines: Line[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "veljko rikalovic — full-stack developer" },
  { type: "command", text: "cat stack.json" },
  { type: "output", text: "{" },
  { type: "output", text: '  "core": ["React", "Next.js", "TypeScript"],' },
  { type: "output", text: '  "backend": ["Node.js", "Supabase"],' },
  { type: "output", text: '  "focus": "practical AI integrations"' },
  { type: "output", text: "}" },
  { type: "command", text: "./deploy zakazi-ai" },
  { type: "success", text: "✓ build passed" },
  { type: "success", text: "✓ deployed to production" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.3 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function TerminalWindow() {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#05070a] shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="ml-3 font-mono text-xs text-muted">veljko@portfolio — zsh</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm"
      >
        {lines.map((line, i) => (
          <motion.div key={i} variants={lineVariant}>
            {line.type === "command" && (
              <span>
                <span className="text-primary">$</span>{" "}
                <span className="text-text">{line.text}</span>
              </span>
            )}
            {line.type === "output" && (
              <span className="text-muted">{line.text}</span>
            )}
            {line.type === "success" && (
              <span className="text-primary">{line.text}</span>
            )}
          </motion.div>
        ))}
        <motion.span
          variants={lineVariant}
          className="mt-1 inline-block h-3.5 w-2 animate-pulse bg-primary align-middle"
        />
      </motion.div>
    </div>
  );
}

export default TerminalWindow;
