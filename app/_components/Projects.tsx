"use client";
import { useTranslations } from "next-intl";
import TiltedCard from "./TiltedCard/TiltedCard";
import ProjectsButton from "./ProjectsButton";
import ProjectsInfo from "./ProjectsInfo";

function Projects() {
  const t = useTranslations();

  const width = window.innerWidth;

  return (
    <div
      id="projects"
      className="flex flex-col gap-40 min-h-screen px-10 sm:px-20 py-16 "
    >
      <div>
        <h1 className="text-4xl underline underline-offset-8 decoration-secondary ">
          {t("My projects")}
        </h1>
        <p className="pt-8 text-lg">{t("Projects description")}</p>
      </div>
      <div className="flex gap-14 flex-wrap w-full items-center px-5">
        <TiltedCard
          imageSrc="/mfscreen.png"
          altText="muscle-flex"
          captionText="muscleFlex"
          containerHeight="300px"
          containerWidth={width < 600 ? "180px" : "350px"}
          imageHeight="300px"
          imageWidth={width < 600 ? "180px" : "350px"}
          rotateAmplitude={16}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="px-5 pt-2 flex flex-col">
              <ProjectsInfo
                name="muscleFlex"
                stack="typescript, next js, tailwind, groq AI"
              />
              <div className="flex gap-2 sm:justify-evenly">
                <ProjectsButton
                  link={"https://github.com/VeljkoRikalovic/muscleFlex"}
                >
                  Github
                </ProjectsButton>
                <ProjectsButton link={"https://muscle-flex.vercel.app/"}>
                  {t("visit")}
                </ProjectsButton>
              </div>
            </div>
          }
        />
        <TiltedCard
          imageSrc="/frpscreen.png"
          altText="Fast react pizza"
          captionText="Fast react pizza"
          containerHeight="300px"
          containerWidth={width < 600 ? "180px" : "350px"}
          imageHeight="300px"
          imageWidth={width < 600 ? "180px" : "350px"}
          rotateAmplitude={16}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="px-5 pt-2 flex flex-col">
              <ProjectsInfo
                name="Fast react pizza"
                stack="react router dom, react router form and tailwind"
              />
              <div className="flex gap-2 sm:justify-evenly">
                <ProjectsButton
                  link={"https://github.com/VeljkoRikalovic/fast-react-pizza"}
                >
                  Github
                </ProjectsButton>
                <ProjectsButton
                  link={"https://fast-react-pizza-veljkorikalovic.netlify.app/"}
                >
                  {t("visit")}
                </ProjectsButton>
              </div>
            </div>
          }
        />
        <TiltedCard
          imageSrc="/twowscreen.png"
          altText="The wild oasis website"
          captionText="The wild oasis website"
          containerHeight="300px"
          containerWidth={width < 600 ? "180px" : "350px"}
          imageHeight="300px"
          imageWidth={width < 600 ? "180px" : "350px"}
          rotateAmplitude={16}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="px-5 pt-2 flex flex-col">
              <ProjectsInfo
                name="The wild oasis website"
                stack="next js, tailwind"
              />
              <div className="flex gap-2 sm:justify-evenly">
                <ProjectsButton
                  link={
                    "https://github.com/VeljkoRikalovic/the-wild-oasis-website"
                  }
                >
                  Github
                </ProjectsButton>
                <ProjectsButton
                  link={"https://the-wild-oasis-website-gamma-gilt.vercel.app"}
                >
                  {t("visit")}
                </ProjectsButton>
              </div>
            </div>
          }
        />
        <TiltedCard
          imageSrc="/hgscreen.png"
          altText="History or Geography quiz"
          captionText="History or Geography quiz"
          containerHeight="300px"
          containerWidth={width < 600 ? "180px" : "350px"}
          imageHeight="300px"
          imageWidth={width < 600 ? "180px" : "350px"}
          rotateAmplitude={16}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="px-5 pt-2 flex flex-col">
              <ProjectsInfo
                name="History or Geography quiz"
                stack="typescript, next js, tailwind, groq AI"
              />
              <div className="flex gap-2 sm:justify-evenly">
                <ProjectsButton
                  link={
                    "https://github.com/VeljkoRikalovic/history-or-geography-quiz"
                  }
                >
                  Github
                </ProjectsButton>
                <ProjectsButton
                  link={
                    "https://history-or-geography-quiz-vrikalovic.netlify.app/"
                  }
                >
                  {t("visit")}
                </ProjectsButton>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
