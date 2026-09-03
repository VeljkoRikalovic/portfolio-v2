"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectCard, { Project } from "./ProjectCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Projects() {
  const t = useTranslations();

  const projects: Project[] = [
    {
      name: "Zakazi AI",
      description: t("projectZakaziDesc"),
      imageSrc: "/zakazi.png",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
      githubLink: "https://github.com/VeljkoRikalovic",
      liveLink: "https://zakazi-ai.vercel.app/",
    },
    {
      name: "AI Interior Visualizer",
      description: t("projectInteriorDesc"),
      imageSrc: "/interior-visualizer.png",
      stack: ["Next.js", "Python", "SAM", "Computer Vision"],
      githubLink: "https://github.com/VeljkoRikalovic",
      liveLink: "https://prop-tech-interior-visualizer.vercel.app/",
    },
    {
      name: "Active Montenegro",
      description: t("projectMontenegroDesc"),
      imageSrc: "/active-montenegro.png",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/VeljkoRikalovic",
      liveLink: "https://activemontenegro.netlify.app/",
    },
    {
      name: "Autooprema",
      description: t("projectAutopremaDesc"),
      imageSrc: "/autooprema.png",
      stack: ["Next.js", "Tailwind CSS", "E-commerce"],
      githubLink: "https://github.com/VeljkoRikalovic",
      liveLink: "https://autooprema.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="flex flex-col gap-12 px-4 py-24 lg:px-20">
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
          {t("My projects")}
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        <p className="pt-6 max-w-2xl text-lg text-neutral-600 dark:text-muted">
          {t("Projects description")}
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} liveLabel={t("visit")} />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
