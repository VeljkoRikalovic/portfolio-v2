"use client";
import { useTranslations } from "next-intl";
function Skills() {
  const t = useTranslations();

  return (
    <div className="min-h-screen px-20 py-12 flex flex-col">
      <h2 className="text-4xl mb-6 underline underline-offset-8 decoration-secondary ">
        {t("Skills")}
      </h2>
      <ul className="list-disc">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Tailwind</li>
        <li>Styled Components</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next js</li>
        <li>Git</li>
      </ul>
    </div>
  );
}

export default Skills;
