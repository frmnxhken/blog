import React, { useEffect, useState } from "react";
import Header from "./ui/Header";
import EditorJsRenderer from "editorjs-react-renderer";

const renderers = {
  image: ({ data }) => (
    <div>
      <img src={data.file.url} alt={data.caption || "image"} />
    </div>
  ),
  header: ({ data }) => {
    const Tag = `h${data.level}`;
    return <Tag>{data.text}</Tag>;
  },
};

const ArticleDetailPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/post")
      .then((r) => r.json())
      .then((response) => {
        const data = response.data[3];
        const content = JSON.parse(data.content);
        // console.log(content.blocks[3].data.file.url);

        setContent(JSON.parse(data.content));
      });
  }, []);

  return (
    <div className="container max-w-[680px] mx-auto px-4 py-24">
      <Header />
      <div className="w-full pb-24">
        {content ? <EditorJsRenderer data={content} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
