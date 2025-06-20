export default function SkillsSection({ skills }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-medium">Primary Languages</h4>
          <ul className="list-disc ml-5 text-sm">
            {skills.primary_languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Tools</h4>
          <ul className="list-disc ml-5 text-sm">
            {skills.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Workflows</h4>
          <ul className="list-disc ml-5 text-sm">
            {skills.workflows.map((flow, i) => (
              <li key={i}>{flow}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
