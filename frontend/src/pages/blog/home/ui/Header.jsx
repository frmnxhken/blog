import React from "react";
import Button from "@/shared/ui/Button";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end-safe gap-6">
      <h1 className="text-3xl sm:text-6xl font-bold w-full sm:w-3/4">
        Discover and Explore the Power of Material
      </h1>
      <Button variant="secondary">See More</Button>
    </div>
  );
};

export default Header;
