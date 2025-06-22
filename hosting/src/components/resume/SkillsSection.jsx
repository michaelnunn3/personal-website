import clsx from "clsx";

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
    <section
      className="py-20 max-w-6xl mx-auto px-4"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className={clsx(
          "text-3xl font-extrabold uppercase mb-8",
          "tracking-wide text-gray-900"
        )}
      >
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.key}
            className={clsx(
              "border border-gray-200 rounded-xl shadow-sm",
              "hover:shadow-md transition-shadow duration-200",
              "p-6 bg-white"
            )}
          >
            <header className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>
            </header>

            <div className="space-y-2">
              {category.items.map((item, index) => (
                <div
                  key={`${category.key}-${index}`}
                  className={clsx(
                    "inline-block bg-gray-100 hover:bg-gray-200",
                    "transition-colors duration-150 px-3 py-2 rounded-lg",
                    "text-sm font-medium text-gray-700 mr-2 mb-2"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
