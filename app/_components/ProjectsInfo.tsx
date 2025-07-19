import { useTranslations } from "next-intl";

type Props = {
  name: string;
  stack: string;
};

function ProjectsInfo({ name, stack }: Props) {
  const t = useTranslations();

  return (
    <div className="bg-gradient-to-br from-background/90 to-secondary/20 backdrop-blur-sm rounded-2xl p-5 border border-secondary/30 shadow-lg">
      <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3 relative">
        {name}
        <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
      </h2>
      <p className="text-text/90 leading-relaxed">
        <span className="font-semibold text-accent">{t("Tech stack")}:</span>{" "}
        <span className="text-text/80">{stack}</span>
      </p>
    </div>
  );
}

export default ProjectsInfo;
