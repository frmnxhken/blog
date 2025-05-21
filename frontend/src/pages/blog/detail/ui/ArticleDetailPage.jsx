import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditorJsRenderer from "editorjs-react-renderer";
import Header from "./Header";
import Loading from "@/shared/ui/Loading";
import { getArticleDetail } from "@/shared/api/Article";
import { customRenderers } from "@/shared/lib/Renderer";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticleDetail = async () => {
      const response = await getArticleDetail(slug);
      if (!response.error) {
        setData(response.data);
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, []);

  return (
    <div className="container max-w-[680px] mx-auto px-4 py-24">
      <Header {...data} />
      <div className="w-full pb-24">
        {loading ? (
          <Loading />
        ) : (
          <EditorJsRenderer
            renderers={customRenderers}
            data={JSON.parse(data.content)}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
