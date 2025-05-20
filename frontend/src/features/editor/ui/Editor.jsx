import { useRef, useEffect } from "react";
import { EDITOR_JS_TOOLS } from "../config";
import EditorJS from "@editorjs/editorjs";

const Editor = ({ holder = "editor", data = null, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder,
        placeholder: "Write here...",
        tools: EDITOR_JS_TOOLS,
        data,
        async onChange(api) {
          const output = await api.saver.save();
          onChange?.(output);
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current.isReady
          .then(() => {
            editorRef.current?.destroy();
            editorRef.current = null;
          })
          .catch(() => {});
      }
    };
  }, [holder]);

  return <div id={holder} />;
};

export default Editor;
