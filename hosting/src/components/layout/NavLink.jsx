import clsx from "clsx";

export default function NavLink({ targetId, label, icon }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex items-center gap-3 px-3 py-2 rounded w-full text-left transition",
        "text-stone-300 hover:text-slate-700 hover:bg-stone-300"
      )}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
