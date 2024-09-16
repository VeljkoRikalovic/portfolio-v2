"use client";

import Image from "next/image";
import Skills from "./Skills";
import { useTranslations } from "next-intl";

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
      <div className="relative aspect-square sm:w-[80%]">
        <Image
          src="/setup.png"
          className="object-cover contrast-200"
          alt="setup"
          fill
          sizes="100%"
        />
      </div>
    </div>
  );
}

export default About;
