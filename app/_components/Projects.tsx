"use client";
import { useTranslations } from "next-intl";
import TiltedCard from "./TiltedCard/TiltedCard";
import ProjectsButton from "./ProjectsButton";
import ProjectsInfo from "./ProjectsInfo";

function Projects() {
  const t = useTranslations();

  const width = window.innerWidth;

  const projects = [
    {
      id: 1,
      name: "Zakaži AI",
      imageSrc: "/zakazi.png",
      altText: "Zakaži AI",
      stack: "next js, tailwind, OpenAI Api",
      githubLink: "https://github.com/VeljkoRikalovic",
      liveLink: "https://zakazi-ai.vercel.app/",
    },
    {
      id: 2,
      name: "muscleFlex",
      imageSrc: "/mfscreen.png",
      altText: "muscle-flex",
      stack: "typescript, next js, tailwind, groq AI",
      githubLink: "https://github.com/VeljkoRikalovic/muscleFlex",
      liveLink: "https://muscle-flex.vercel.app/",
    },
    {
      id: 3,
      name: "Fast react pizza",
      imageSrc: "/frpscreen.png",
      altText: "Fast react pizza",
      stack: "react router dom, react router form and tailwind",
      githubLink: "https://github.com/VeljkoRikalovic/fast-react-pizza",
      liveLink: "https://fast-react-pizza-veljkorikalovic.netlify.app/",
    },
    {
      id: 4,
      name: "The wild oasis website",
      imageSrc: "/twowscreen.png",
      altText: "The wild oasis website",
      stack: "next js, tailwind, supabase",
      githubLink: "https://github.com/VeljkoRikalovic/the-wild-oasis-website",
      liveLink: "https://the-wild-oasis-website-gamma-gilt.vercel.app",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col gap-40 min-h-screen px-4 py-12 lg:px-20"
    >
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
          {t("My projects")}
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h1>
        <p className="pt-8 text-lg lg:text-xl">{t("Projects description")}</p>
      </div>
      <div className="flex gap-14 flex-wrap w-full items-center justify-center px-5">
        {projects.map((project) => (
          <TiltedCard
            key={project.id}
            imageSrc={project.imageSrc}
            altText={project.altText}
            captionText={project.name}
            containerHeight="300px"
            containerWidth={width < 600 ? "180px" : "350px"}
            imageHeight="300px"
            imageWidth={width < 600 ? "180px" : "350px"}
            rotateAmplitude={8}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="sm:px-6 sm:py-4 flex flex-col h-full justify-between">
                <ProjectsInfo name={project.name} stack={project.stack} />
                <div className="flex sm:gap-3 justify-center sm:mt-4">
                  <ProjectsButton link={project.githubLink}>
                    Github
                  </ProjectsButton>
                  <ProjectsButton link={project.liveLink}>
                    {t("visit")}
                  </ProjectsButton>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
