"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Projects() {
  const t = useTranslations();
  return (
    <div
      id="projects"
      className="flex flex-col gap-40 min-h-screen px-20 py-12 "
    >
      <div>
        <h1 className="text-4xl underline underline-offset-8 decoration-secondary ">
          {t("My projects")}
        </h1>
        <p className="pt-8 text-lg">{t("Projects description")}</p>
      </div>
      <div className="flex gap-14 flex-wrap w-full px-5">
        <div className="transform transition duration-300 hover:scale-110 rounded-lg h-[30rem] sm:h-96 w-64 bg-secondary hover:shadow-none shadow-[0px_0px_8px_10px_rgba(75,195,109,0.45)] hover:-rotate-0  -rotate-12">
          <div className="m-2 h-3/6 rounded-lg relative">
            <Image src="/mfscreen.png" fill alt="background" sizes="100%" />
          </div>

          <div className="px-5 pt-2 flex flex-col">
            <h2 className="sm:text-3xl text-xl font-bold">muscleFlex</h2>
            <p className="dark:text-gray-300">
              <span className="font-semibold">{t("Tech stack")}:</span>{" "}
              typescript, next js, tailwind, groq AI
            </p>

            <div className="flex justify-evenly">
              <a
                href="https://github.com/VeljkoRikalovic/muscleFlex"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  Github
                </button>
              </a>
              <a href="https://muscle-flex.vercel.app/" target="_blank">
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  {t("visit")}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition duration-300 hover:scale-110 rounded-lg h-[30rem] sm:h-96 w-64 bg-secondary hover:shadow-none shadow-[0px_0px_8px_10px_rgba(75,195,109,0.45)] hover:-rotate-0  -rotate-12 hover:z-10">
          <div className="m-2 h-3/6 rounded-lg relative">
            <Image src="/twoscreen.png" fill alt="background" sizes="100%" />
          </div>

          <div className="px-5 pt-2 flex flex-col">
            <h2 className="sm:text-3xl text-xl font-bold">The wild oasis</h2>
            <p className="dark:text-gray-300">
              <span className="font-semibold">{t("Tech stack")}:</span> react
              query, react hook form, supabese, styled components
            </p>

            <div className="flex justify-evenly">
              <a
                href="https://github.com/VeljkoRikalovic/the-wild-oasis"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  Github
                </button>
              </a>
              <a
                href="https://the-wild-oasis-veljkorikalovic.netlify.app"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  {t("visit")}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition duration-300 hover:scale-110 rounded-lg h-[30rem] sm:h-96 w-64 bg-secondary hover:shadow-none shadow-[0px_0px_8px_10px_rgba(75,195,109,0.45)] hover:-rotate-0  -rotate-12">
          <div className="m-2 h-3/6 rounded-lg relative">
            <Image src="/twowscreen.png" fill alt="background" sizes="100%" />
          </div>

          <div className="px-5 pt-2 flex flex-col">
            <h2 className="sm:text-3xl text-xl font-bold">
              The wild oasis website
            </h2>
            <p className="dark:text-gray-300">
              <span className="font-semibold">{t("Tech stack")}:</span> next js,
              tailwind
            </p>

            <div className="flex justify-evenly">
              <a
                href="https://github.com/VeljkoRikalovic/the-wild-oasis-website"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#4bc36d,#2b9178_50%,#64aaa9)] dark:text-white px-4 py-2  rounded-md hover:opacity-40"
                  type="button"
                >
                  Github
                </button>
              </a>
              <a
                href="https://the-wild-oasis-website-gamma-gilt.vercel.app"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  {t("visit")}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition duration-300 hover:scale-110 rounded-lg h-[30rem] sm:h-96 w-64 hover:shadow-none bg-secondary shadow-[0px_0px_8px_10px_rgba(75,195,109,0.45)] hover:-rotate-0  -rotate-12">
          <div className="m-2 h-3/6 rounded-lg relative">
            <Image src="/hgscreen.png" fill alt="background" sizes="100%" />
          </div>

          <div className="px-5 pt-2 flex flex-col">
            <h2 className="sm:text-3xl text-xl font-bold">
              History or Geography quiz
            </h2>
            <p className="dark:text-gray-300">
              <span className="font-semibold">{t("Tech stack")}:</span>{" "}
              typescript, redux, tailwind
            </p>

            <div className="flex justify-evenly">
              <a
                href="https://github.com/VeljkoRikalovic/history-or-geography-quiz"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  Github
                </button>
              </a>
              <a
                href="https://history-or-geography-quiz-vrikalovic.netlify.app/"
                target="_blank"
              >
                <button
                  className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
                  type="button"
                >
                  {t("visit")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
