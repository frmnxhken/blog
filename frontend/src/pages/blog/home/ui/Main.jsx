import React from "react";
import Card from "@/shared/ui/Card";
import { LIST_ARTICLE } from "@/shared/data";
import Button from "@/shared/ui/Button";

const Main = () => {
  return (
    <div className="bg-white w-full rounded-t-3xl">
      <div className="container max-w-[1200px] mx-auto px-4 py-24">
        <div className="flex justify-between items-end-safe">
          <h1 className="text-6xl font-semibold w-3/4">
            Discover and Explore the Power of Material
          </h1>
          <Button variant="secondary">See More</Button>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-24">
          {LIST_ARTICLE.map((article, index) => (
            <Card key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
