import type { Itechnology } from "../../types/technologiesType";

import TechnologyCard from "./TechnologyCard";

interface AvailableTechnologyProps {
  technologies: Itechnology[];
  selectedTechnologies: Itechnology[];
  onAddTechnology: (technology: Itechnology) => void;
}

const AvailableTechnology = ({
  technologies,
  onAddTechnology,
  selectedTechnologies,
}: AvailableTechnologyProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.name}
          technology={technology}
          onAdd={() => onAddTechnology(technology)}
          isSelected={selectedTechnologies.some(
            (item) => item.name === technology.name
          )}
        />
      ))}
    </div>
  );
};

export default AvailableTechnology;