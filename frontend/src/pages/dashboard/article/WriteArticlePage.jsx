import { useState } from "react";
import Editor from "@/features/editor/Editor";
import Button from "@/shared/ui/Button";

const WriteArticlePage = () => {
  const [editorData, setEditorData] = useState(null);

  return (
    <div>
      <div className="flex sticky top-4 z-20">
        <Button>Publish</Button>
        <Button variant="secondary">Draft</Button>
      </div>

      <div className="w-full max-w-none py-4 rounded-lg bg-white border border-zinc-200">
        <Editor holder="editor" data={null} onChange={setEditorData} />
      </div>
    </div>
  );
};

export default WriteArticlePage;
