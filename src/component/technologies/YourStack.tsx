import type { Itechnology } from "../../types/technologiesType";

interface YourStackProps {
  selectedTechnologies: Itechnology[];
  onRemoveTechnology: (name: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemoveTechnology,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
      {/* Header */}
      <div>
        <h2 className="font-semibold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {selectedTechnologies.length === 0
            ? "No technologies selected yet"
            : `${selectedTechnologies.length} Technology Selected`}
        </p>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 && (
        <div className="mt-3 rounded-md border border-dashed border-slate-200 p-4 text-center">
          <span className="text-xs text-slate-300">
            Your stack is empty
          </span>
        </div>
      )}

      {/* Selected Technologies */}
      {selectedTechnologies.length > 0 && (
        <>
          <div className="mt-3 space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.name}
                className="flex items-center justify-between rounded-md border border-slate-200 p-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-6 w-6 object-contain"
                  />

                  <div>
                    <p className="text-[11px] font-semibold text-slate-800">
                      {technology.name}
                    </p>

                    <p className="text-[9px] text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveTechnology(technology.name)}
                  className="text-lg leading-none text-slate-400 hover:text-slate-600"
                  title={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All - Bottom */}
          <button
            onClick={onRemoveAll}
            className="mt-9 w-full rounded-md border border-red-300 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;