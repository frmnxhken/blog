import React from "react";
import Editor from "@/features/editor/Editor";
import Button from "@/shared/ui/Button";
import InputImage from "@/shared/ui/InputImage";
import Input from "@/shared/ui/Input";
import useWriteArticle from "@/features/article/hooks/useWriteArticle";
import InputTag from "@/shared/ui/InputTag";

const WriteArticlePage = () => {
  const {
    setEditorData,
    handleThumbnail,
    setTitle,
    tags,
    setTags,
    handleSubmit,
  } = useWriteArticle();

  return (
    <div>
      <div className="flex flex-row-reverse mb-6 w-full">
        <Button onClick={() => handleSubmit("publish")}>Publish</Button>
        <Button onClick={() => handleSubmit("draft")} variant="secondary">
          Draft
        </Button>
      </div>

      <div className="space-y-3 mb-6">
        <Input
          label="Title article"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title article..."
          className="w-full"
        />
        <InputTag
          value={tags}
          onChange={(val) => setTags(val)}
          label="Tag article"
        />
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
