import { use, useState } from "react";
import { toast } from "react-toastify";

import type { Itechnology } from "../../types/technologiesType";

import AvailableTechnology from "./AvailableTechnology";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Itechnology[]>([]);

  // Add technology
  const handleAddTechnology = (technology: Itechnology) => {
    // Prevent duplicate
    const alreadyExists = selectedTechnologies.some(
      (item) => item.name === technology.name
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveTechnology = (name: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.name !== name)
    );

    toast.info(`${name} removed from your stack!`);
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed!");
  };

  return (
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="py-5">
        <h2 className="text-2xl font-bold">
          Explore{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        {/* Available Technologies */}
        <div className="min-w-0 flex-1">
          <AvailableTechnology
            technologies={technologies}
            onAddTechnology={handleAddTechnology}
            selectedTechnologies={selectedTechnologies}
          />
        </div>

        {/* Your Stack */}
        <div className="w-full lg:w-[220px] lg:flex-none">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemoveTechnology={handleRemoveTechnology}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;