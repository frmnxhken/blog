import React from "react";
import Card from "@/shared/ui/Card";
import { LIST_ARTICLE } from "@/shared/data";
import Button from "@/shared/ui/Button";

const Main = () => {
  return (
    <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
      <div className="container max-w-[1200px] mx-auto px-4 py-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end-safe gap-6">
          <h1 className="text-3xl sm:text-6xl font-bold w-full sm:w-3/4">
            Discover and Explore the Power of Material
          </h1>
          <Button variant="secondary">See More</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-24">
          {LIST_ARTICLE.map((article, index) => (
            <Card key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
