import { ProjectCard } from "./ProjectCard";
export const ProjectsSection = () => {
  const projects = [
    {
      title: "ビリヤードスコア分析webアプリ",
      description:
        "プロのビリヤードの試合を分析するためのウェブアプリ。スコアの記録、対戦履歴の管理が可能。",
      image: "/billiards.png",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    },
    {
      title: "Samgyupsal Restaurant",
      description: "サムギュプサルレストランのウェブサイト。",
      image: "/samgyupsal.png",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">プロジェクト</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            こちらは今現在取り組んでいるプロジェクトの一部です。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
