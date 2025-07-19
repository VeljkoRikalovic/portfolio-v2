"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

function Skills() {
  const t = useTranslations();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Javascript", color: "from-yellow-500 to-yellow-600" },
        { name: "Typescript", color: "from-blue-600 to-blue-700" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", color: "from-orange-500 to-orange-600" },
        { name: "CSS", color: "from-blue-500 to-blue-600" },
        { name: "SASS", color: "from-pink-500 to-pink-600" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", color: "from-green-500 to-green-600" },
        { name: "Express.js", color: "from-gray-600 to-gray-700" },
        { name: "MongoDB", color: "from-green-600 to-green-700" },
      ],
    },
    {
      category: "Frameworks & Tools",
      skills: [
        { name: "React", color: "from-cyan-400 to-cyan-500" },
        { name: "React Native", color: "from-cyan-500 to-cyan-600" },
        { name: "Next.js", color: "from-gray-800 to-gray-900" },
        { name: "Tailwind", color: "from-cyan-500 to-cyan-600" },
        { name: "Styled Components", color: "from-purple-500 to-purple-600" },
        { name: "Mongoose", color: "from-green-600 to-green-700" },
        { name: "Figma", color: "from-purple-300 to-purple-600" },
        { name: "Git", color: "from-orange-500 to-orange-600" },
      ],
    },
  ];

  return (
    <div className="w-full py-8 lg:py-12 flex flex-col">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
        {t("Skills")}
        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </h2>

      {/* Desktop Layout - 2 columns */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12">
        {/* Left Column - Programming Languages, Frontend, Backend */}
        <div className="space-y-8">
          {skillCategories.slice(0, 3).map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent mb-6">
                {category.category}
              </h3>
              <div className="grid gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-lg border border-secondary/20 bg-gradient-to-r from-background/50 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Skill Icon/Dot */}
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                          skill.color
                        } transition-all duration-300 ${
                          hoveredSkill === skill.name
                            ? "scale-125 shadow-lg"
                            : ""
                        }`}
                      ></div>

                      {/* Skill Name */}
                      <span
                        className={`text-lg font-medium transition-all duration-300 ${
                          hoveredSkill === skill.name
                            ? "text-primary scale-105"
                            : "text-text/90"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    {/* Animated Border on Hover */}
                    <div
                      className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                        hoveredSkill === skill.name
                          ? `border-gradient-to-r ${skill.color} opacity-50`
                          : "border-transparent"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Frameworks & Tools only */}
        <div className="space-y-8">
          {skillCategories.slice(3).map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent mb-6">
                {category.category}
              </h3>
              <div className="grid gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-lg border border-secondary/20 bg-gradient-to-r from-background/50 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Skill Icon/Dot */}
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                          skill.color
                        } transition-all duration-300 ${
                          hoveredSkill === skill.name
                            ? "scale-125 shadow-lg"
                            : ""
                        }`}
                      ></div>

                      {/* Skill Name */}
                      <span
                        className={`text-lg font-medium transition-all duration-300 ${
                          hoveredSkill === skill.name
                            ? "text-primary scale-105"
                            : "text-text/90"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    {/* Animated Border on Hover */}
                    <div
                      className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                        hoveredSkill === skill.name
                          ? `border-gradient-to-r ${skill.color} opacity-50`
                          : "border-transparent"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Single column */}
      <div className="lg:hidden grid gap-8">
        {skillCategories.map((category) => (
          <div key={category.category} className="space-y-4">
            <h3 className="text-xl font-semibold text-accent mb-4">
              {category.category}
            </h3>
            <div className="grid gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative p-4 rounded-lg border border-secondary/20 bg-gradient-to-r from-background/50 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center space-x-3">
                    {/* Skill Icon/Dot */}
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                        skill.color
                      } transition-all duration-300 ${
                        hoveredSkill === skill.name ? "scale-125 shadow-lg" : ""
                      }`}
                    ></div>

                    {/* Skill Name */}
                    <span
                      className={`text-lg font-medium transition-all duration-300 ${
                        hoveredSkill === skill.name
                          ? "text-primary scale-105"
                          : "text-text/90"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>

                  {/* Animated Border on Hover */}
                  <div
                    className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                      hoveredSkill === skill.name
                        ? `border-gradient-to-r ${skill.color} opacity-50`
                        : "border-transparent"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="mt-8 lg:mt-12 flex justify-center">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse`}
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
