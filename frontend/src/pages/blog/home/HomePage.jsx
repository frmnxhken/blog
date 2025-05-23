import React from "react";

import Loading from "@/shared/ui/Loading";
import Card from "@/shared/ui/Card";

import Hero from "./ui/Hero";
import Header from "./ui/Header";
import { useArticleUserRecent } from "@/features/article/hooks";

const HomePage = () => {
  const { data, loading } = useArticleUserRecent();

  return (
    <>
      <Hero />
      <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
        <div className="container max-w-[1200px] mx-auto px-4 py-24">
          <Header />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {loading ? (
              <Loading />
            ) : (
              data.map((article, index) => <Card key={index} {...article} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
