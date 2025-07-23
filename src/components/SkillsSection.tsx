import { SkillBadge } from "./SkillBadge";
import { CodeIcon, PencilRulerIcon, BarChartIcon } from "lucide-react";
export const SkillsSection = () => {
  const frontendSkills = [
    {
      name: "HTML5",
      level: 85,
    },
    {
      name: "CSS3/SCSS",
      level: 85,
    },
    {
      name: "JavaScript",
      level: 80,
    },
    {
      name: "React",
      level: 75,
    },
    {
      name: "Next.js",
      level: 75,
    },
    {
      name: "TypeScript",
      level: 65,
    },
    {
      name: "Tailwind CSS",
      level: 85,
    },
  ];

  const designSkills = [
    {
      name: "Figma",
      level: 70,
    },
    {
      name: "UI/UX Design",
      level: 70,
    },
  ];
  const otherSkills = [
    {
      name: "Git/GitHub",
      level: 85,
    },
    {
      name: "Supabase",
      level: 20,
    },
  ];
  return (
    <section id="skills" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">スキル</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            勉強してきたスキルと技術スタックを紹介します。これらのスキルを活かして、
            <br />
            ユーザーにとって価値のあるプロダクトを作成しています。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-row-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <CodeIcon size={24} className="text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold">フロントエンドスキル</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <PencilRulerIcon size={24} className="text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold">デザイン</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {designSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <BarChartIcon size={24} className="text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold">Other Skills</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
