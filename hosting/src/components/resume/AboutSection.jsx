import {
  CodeBracketIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Card from "../layout/Card";

export default function AboutSection({ about }) {
  return (
    <div aria-labelledby="about-heading">
      {/* Name */}
      <h1
        id="about-heading"
        className="text-4xl sm:text-5xl font-extrabold uppercase text-slate-900"
      >
        {about.name}
      </h1>

      {/* Contact Line */}
      <div
        className={clsx(
          "flex flex-wrap items-center gap-4 mt-2",
          "text-slate-600 text-sm"
        )}
      >
        <div className="flex items-center gap-1">
          <EnvelopeIcon className="w-4 h-4" />
          <a
            href={`mailto:${about.email}`}
            className={clsx(
              "hover:underline transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-slate-500",
              "focus:ring-offset-2 rounded"
            )}
          >
            {about.email}
          </a>
        </div>
        <div className="flex items-center gap-1">
          <PhoneIcon className="w-4 h-4" />
          <span>{about.phone}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-4 h-4" />
          <span>{about.address}</span>
        </div>
      </div>

      {/* Bio Card */}
      <Card className="mt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">About</h2>
        <div className="text-slate-700 leading-relaxed">
          <p>{about.bio}</p>
        </div>
      </Card>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "p-2 rounded-lg border border-slate-200 bg-white",
            "hover:shadow-md hover:border-blue-300",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-slate-500",
            "focus:ring-offset-2"
          )}
          aria-label="LinkedIn Profile"
        >
          <UserCircleIcon
            className={clsx(
              "w-6 h-6 text-slate-700 hover:text-blue-600",
              "transition-colors duration-150"
            )}
          />
        </a>
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "p-2 rounded-lg border border-slate-200 bg-white",
            "hover:shadow-md hover:border-slate-400",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-slate-500",
            "focus:ring-offset-2"
          )}
          aria-label="GitHub Profile"
        >
          <CodeBracketIcon
            className={clsx(
              "w-6 h-6 text-slate-700 hover:text-slate-900",
              "transition-colors duration-150"
            )}
          />
        </a>
      </div>
    </div>
  );
}
