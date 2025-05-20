import React, { useEffect, useState } from "react";
import Editor from "@/features/editor/Editor";
import Button from "@/shared/ui/Button";
import InputImage from "@/shared/ui/InputImage";
import Input from "@/shared/ui/Input";
import { getArticleById } from "@/features/article/api";
import Loading from "@/shared/ui/Loading";

const EditArticlePage = () => {
  const [article, setArticle] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = true;
    const fetchDetail = async () => {
      const response = await getArticleById();
      setArticle(response.data);
      setContent(JSON.parse(response.data.content));
      setLoading(false);
    };

    fetchDetail();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <Input
          value={article?.title}
          placeholder="Title article..."
          className="w-[80%]"
        />
        <div>
          <Button>Publish</Button>
          <Button variant="secondary">Draft</Button>
        </div>
      </div>

      <div className="mb-6">
        {loading ? (
          <Loading />
        ) : (
          <InputImage image={"http://127.0.0.1:8000/" + article?.thumbnail} />
        )}
      </div>

      <div className="w-full max-w-none py-4 rounded-lg bg-white border border-zinc-200">
        {loading ? <Loading /> : <Editor holder="editor" data={content} />}
      </div>
    </div>
  );
};

export default EditArticlePage;
