"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiImage } from "react-icons/fi";

export type Project = {
  name: string;
  description: string;
  imageSrc: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
};

type Props = {
  project: Project;
  liveLabel: string;
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectCard({ project, liveLabel }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-surface shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-shadow duration-300"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        {!imageFailed ? (
          <img
            src={project.imageSrc}
            alt={project.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
            <FiImage className="text-3xl" />
            <span className="text-xs">Preview coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-text">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 dark:border-white/15 px-3.5 py-2 text-sm font-medium text-neutral-900 dark:text-text transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <FiGithub />
            Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary px-3.5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            {liveLabel}
            <FiArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
