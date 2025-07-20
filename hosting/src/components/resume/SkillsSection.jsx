import clsx from "clsx";
import Card from "../layout/Card";

export default function SkillsSection({ skills }) {
  const skillCategories = [
    {
      title: "Primary Languages",
      items: skills.primary_languages,
      key: "primary_languages",
    },
    {
      title: "Tools",
      items: skills.tools,
      key: "tools",
    },
    {
      title: "Workflows",
      items: skills.workflows,
      key: "workflows",
    },
  ];

  return (
    <div aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        className={clsx(
          "text-3xl sm:text-4xl font-extrabold uppercase mb-8",
          "tracking-wide text-slate-900"
        )}
      >
        Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.key}>
            <header className="mb-4">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {category.title}
              </h3>
            </header>

            <div className="space-y-2">
              {category.items.map((item, index) => (
                <div
                  key={`${category.key}-${index}`}
                  className={clsx(
                    "inline-block bg-slate-100 hover:bg-slate-200",
                    "transition-colors duration-150 px-3 py-2 rounded-lg",
                    "text-sm font-medium text-slate-700 mr-2 mb-2"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
