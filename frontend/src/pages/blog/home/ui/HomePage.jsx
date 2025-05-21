import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Loading from "@/shared/ui/Loading";
import Card from "@/shared/ui/Card";
import { getArticleRecent } from "@/shared/api/Article";
import Header from "./Header";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticleRecent = async () => {
      const response = await getArticleRecent();
      if (!response.error) {
        setData(response.data);
        setLoading(false);
      }
    };

    fetchArticleRecent();
  }, []);

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
