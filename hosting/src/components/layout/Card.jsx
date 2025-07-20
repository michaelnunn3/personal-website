import clsx from "clsx";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={clsx(
        "border border-slate-200 rounded-xl shadow-sm",
        "hover:shadow-md transition-shadow duration-200",
        "p-6 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
