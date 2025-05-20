import { deletePost } from "@/features/article/api";
import React from "react";
import { Link } from "react-router-dom";

const ArticleItem = ({ id, title, date, thumbnail }) => {
  const handleDelete = async () => {
    try {
      const response = await deletePost(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full border-b border-zinc-200 py-2">
      <div className="flex items-center gap-x-4">
        <img
          src={"http://127.0.0.1:8000/" + thumbnail}
          alt="thumbnail"
          className="h-[80px] aspect-video object-cover rounded-md"
        />
        <div>
          <h3 className="text-sm font-medium mb-2">{title}</h3>
          <p className="text-xs mb-4 text-zinc-500">{date}</p>
          <div className="flex items-center gap-x-4">
            <Link to={id + "/edit"} className="text-sm">
              Edit
            </Link>
            <button onClick={handleDelete} className="text-sm text-rose-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
