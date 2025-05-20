import React, { useEffect, useState } from "react";
import Card from "@/shared/ui/Card";
import Tag from "./Tag";
import Loading from "@/shared/ui/Loading";
import { getArticles } from "@/shared/api/Article";
import Header from "./Header";

const ArticlePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
      const response = await getArticles();
      if (!response.error) {
        setData(response.data);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="bg-white w-full rounded-t-3xl rounded-b-3xl">
        <div className="container max-w-[1200px] mx-auto px-4 py-24">
          <Header />
          <Tag />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-24">
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

export default ArticlePage;
