import clsx from "clsx";

export default function NavLink({ targetId, label, icon, onClick }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu after navigation
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex items-center gap-3 px-3 py-2 rounded w-full text-left transition",
        "text-slate-300 hover:text-slate-700 hover:bg-slate-300",
        "focus:outline-none focus:ring-2 focus:ring-slate-500",
        "focus:ring-offset-2 focus:ring-offset-slate-700"
      )}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
