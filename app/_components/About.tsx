"use client";

import Skills from "./Skills";
import { useTranslations } from "next-intl";
import LetterGlitch from "./LetterGlitch/LetterGlitch";

function About() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col px-20 py-12 sm:grid sm:grid-cols-2 sm:grid-rows-[0.3fr_1fr] gap-8">
      <div className="col-span-2 flex flex-col gap-10">
        <h2
          id="about"
          className="text-5xl underline underline-offset-8 decoration-secondary"
        >
          {t("About me")}
        </h2>
        <p className="text-lg">{t("About description")}</p>
      </div>
      <Skills />
      <div className="sm:w-[80%] py-12 h-3/5">
        <LetterGlitch
          glitchColors={["#2b9178", "#4bc36d", "#64aaa9"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
    </div>
  );
}

export default About;
