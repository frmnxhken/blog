import React from "react";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { LIST_ARTICLE, LIST_CATEGORY } from "@/shared/data";

const Main = () => {
  return (
    <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
      <div className="container max-w-[1200px] mx-auto px-4 py-24">
        <div className="flex justify-between items-end-safe">
          <h1 className="text-6xl font-semibold w-3/4">Articles</h1>
          <p className="text-md text-zinc-500 text-left w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            iusto ab vel provident veniam numquam fuga, alias aliquam tempore
            quia.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-2 mt-12">
          {LIST_CATEGORY.map((category, index) => (
            <Button variant="secondary">#{category}</Button>
          ))}
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
