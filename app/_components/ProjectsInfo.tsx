import { useTranslations } from "next-intl";

type Props = {
  name: string;
  stack: string;
};

function ProjectsInfo({ name, stack }: Props) {
  const t = useTranslations();

  return (
    <div className="bg-slate-400 rounded-2xl p-4 mt-3 mb-2 opacity-85">
      <h2 className="sm:text-2xl text-teal-200 text-xl font-bold  underline underline-offset-8 decoration-secondary">
        {name}
      </h2>
      <p className="text-black">
        <span className="font-semibold">{t("Tech stack")}:</span> {stack}
      </p>
    </div>
  );
}

export default ProjectsInfo;
