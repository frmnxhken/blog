import { useState } from "react";
import axios from "axios";
import Editor from "@/features/editor/Editor";
import Button from "@/shared/ui/Button";
import InputImage from "@/shared/ui/InputImage";
import Input from "@/shared/ui/Input";
import { createPost } from "./Article.api";

const WriteArticlePage = () => {
  const [editorData, setEditorData] = useState(null);
  const [title, setTitle] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnail = (file) => {
    setThumbnail(file);
  };

  const handleSubmit = async () => {
    const payload = {
      title,
      thumbnail,
      tags: ["Laravel", "React", "Editor.js"],
      content: editorData,
    };

    try {
      const response = await createPost(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-6">
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title article..."
          className="w-[80%]"
        />
        <div>
          <Button onClick={handleSubmit}>Publish</Button>
          <Button variant="secondary">Draft</Button>
        </div>
      </div>

      <div className="mb-6">
        <InputImage onImageChange={handleThumbnail} />
      </div>

      <div className="w-full max-w-none py-4 rounded-lg bg-white border border-zinc-200">
        <Editor holder="editor" data={null} onChange={setEditorData} />
      </div>
    </div>
  );
};

export default WriteArticlePage;
