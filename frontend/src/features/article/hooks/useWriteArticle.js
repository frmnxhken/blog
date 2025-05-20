import { useState } from "react";
import { createPost } from "@/features/article/api";

const useWriteArticle = () => {
  const [editorData, setEditorData] = useState(null);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [tags, setTags] = useState([]);

  const handleThumbnail = (file) => {
    setThumbnail(file);
  };

  const handleSubmit = async (status) => {
    const payload = {
      title,
      thumbnail,
      tags,
      content: editorData,
      status,
    };

    try {
      const response = await createPost(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setEditorData,
    handleThumbnail,
    setTitle,
    tags,
    setTags,
    handleSubmit,
  };
};

export default useWriteArticle;
