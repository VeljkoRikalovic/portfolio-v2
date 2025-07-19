"use client";

import Skills from "./Skills";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col px-4 py-12 lg:px-20 gap-8 lg:gap-12">
      {/* Header Section */}
      <div className="flex flex-col gap-8 lg:gap-10">
        <h2
          id="about"
          className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative"
        >
          {t("About me")}
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed dark:text-text/90">
          {t("About description")}
        </p>
      </div>

      {/* Skills Section */}
      <div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
