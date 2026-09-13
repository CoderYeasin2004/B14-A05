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
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-900">
          Your Stack
        </h2>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-[10px] font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Count */}
      <p className="mt-1 text-xs text-slate-400">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet"
          : `${selectedTechnologies.length} Technology Selected`}
      </p>

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
        <div className="mt-4 space-y-2">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.name}
              className="flex items-center justify-between rounded-md border border-slate-100 p-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-5 w-5 object-contain"
                />

                <span className="text-xs font-medium text-slate-700">
                  {technology.name}
                </span>
              </div>

              <button
                onClick={() => onRemoveTechnology(technology.name)}
                className="text-xs text-red-400 hover:text-red-600"
                title={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;