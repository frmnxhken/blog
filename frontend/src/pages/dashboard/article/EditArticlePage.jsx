import React from "react";
import Editor from "@/features/editor/Editor";
import Button from "@/shared/ui/Button";
import InputImage from "@/shared/ui/InputImage";
import Input from "@/shared/ui/Input";
import InputTag from "@/shared/ui/InputTag";
import Loading from "@/shared/ui/Loading";
import useEditArticle from "@/features/article/hooks/useEditArticle";

const EditArticlePage = () => {
  const { loading, formData, handleChange, handleSubmit } = useEditArticle();

  return (
    <div>
      <div className="flex flex-row-reverse mb-6 w-full">
        <Button onClick={() => handleSubmit("publish")}>Publish</Button>
        <Button onClick={() => handleSubmit("draft")} variant="secondary">
          Draft
        </Button>
      </div>

      <div className="space-y-3 mb-6">
        {!loading && (
          <Input
            label="Title article"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Title article..."
            className="w-full"
          />
        )}

        {!loading && (
          <InputTag
            value={formData.tags}
            onChange={(val) => handleChange("tags", val)}
            label="Tag article"
          />
        )}
      </div>

      <div className="mb-6">
        {loading ? (
          <Loading />
        ) : (
          <InputImage
            onImageChange={(file) => handleChange("thumbnail", file)}
            image={"http://127.0.0.1:8000/" + formData.thumbnail}
          />
        )}
      </div>

      <div className="w-full max-w-none py-4 rounded-lg bg-white border border-zinc-200">
        {loading ? (
          <Loading />
        ) : (
          <Editor
            holder="editor"
            data={formData.content}
            onChange={(val) => handleChange("content", val)}
          />
        )}
      </div>
    </div>
  );
};

export default EditArticlePage;
