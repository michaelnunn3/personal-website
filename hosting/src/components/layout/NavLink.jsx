export default function NavLink({ targetId, label, icon }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition w-full text-left"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
