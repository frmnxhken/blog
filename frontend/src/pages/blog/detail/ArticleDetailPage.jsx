import React from "react";
import { useParams } from "react-router-dom";
import EditorJsRenderer from "editorjs-react-renderer";

import Header from "./ui/Header";
import Loading from "@/shared/ui/Loading";
import Meta from "@/shared/ui/Meta";

import { customRenderers } from "@/shared/lib/Renderer";
import { useArticleUserDetail } from "@/features/article/hooks";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const { data, loading } = useArticleUserDetail(slug);

  return (
    <>
      {!loading && data && <Meta title={data.title} />}
      <div className="container max-w-[680px] mx-auto px-4 pb-24 mt-12">
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
    </>
  );
};

export default ArticleDetailPage;
