import type { Itechnology } from "../../types/technologiesType";

interface TechnologyCardProps {
  technology: Itechnology;
  onAdd: () => void;
  isSelected: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-7 w-7 object-contain"
        />

        {technology.name !== "Next.js" && (
          <span
            style={{
              backgroundColor: technology.badgeBg,
              color: technology.badgeText,
            }}
            className="rounded-full px-2 py-1 text-[10px] font-medium"
          >
            {technology.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h2 className="mt-4 text-lg font-bold text-slate-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 h-[54px] overflow-hidden text-[11px] leading-4 text-slate-500">
        {technology.description}
      </p>

      {/* Category / Level / Rating */}
      <div className="mt-4 flex items-center justify-between text-[10px] text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.level}</span>

        <span className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={onAdd}
        disabled={isSelected}
        className={`mt-4 w-full rounded-md py-2.5 text-xs font-medium text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-slate-400"
            : "bg-[#080D1A] hover:bg-[#161C2A]"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;