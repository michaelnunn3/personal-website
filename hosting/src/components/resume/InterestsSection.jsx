import clsx from "clsx";
import Card from "../layout/Card";

export default function InterestsSection({ interests }) {
  return (
    <div aria-labelledby="interests-heading">
      <h2
        id="interests-heading"
        className={clsx(
          "text-3xl sm:text-4xl font-extrabold uppercase mb-8",
          "tracking-wide text-slate-900"
        )}
      >
        Interests
      </h2>
      <div className="grid gap-6">
        <Card>
          <div className="text-slate-700 leading-relaxed">
            <p>{interests}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
