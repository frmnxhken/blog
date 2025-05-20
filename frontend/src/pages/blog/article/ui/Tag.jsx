import React from "react";
import Button from "@/shared/ui/Button";
import { LIST_CATEGORY } from "@/shared/data";

const Tag = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-12">
      {LIST_CATEGORY.map((category, index) => (
        <Button variant="secondary">#{category}</Button>
      ))}
    </div>
  );
};

export default Tag;
