"use client";
import Typewriter from "typewriter-effect";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function Hero() {
  const t = useTranslations();
  const pathname = usePathname();
  let currentLng;
  if (pathname == "/en") currentLng = "cveng.pdf";
  if (pathname == "/rs") currentLng = "cv.pdf";

  return (
    <div className="min-h-screen px-20 py-12 mt-20">
      <div className="flex sm:flex-row flex-col gap-12">
        <div className="w-3/4">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-text bg-clip-text text-transparent">
            {t("header")}
            <br />{" "}
            <div className="py-2 text-background dark:text-text ">
              <Typewriter
                options={{
                  strings: ["Veljko Rikalović", "Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="py-12">{t("description")}</p>
          <a href={`/${currentLng}`} download={currentLng}>
            <button className="[background:linear-gradient(144deg,#4bc36d,#2b9178_50%,#64aaa9)]  px-4 py-2 font-semibold rounded-md hover:opacity-80">
              {t("cv")} CV
            </button>
          </a>
        </div>
        <div className="rounded-br-2xl bg-secondary w-1/4 group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden bg-gradient-to-bl from-secondary via-accent to-primary p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#727272] backdrop-filter backdrop-blur-md border border-neutral-600"></div>
      </div>
    </div>
  );
}

export default Hero;
