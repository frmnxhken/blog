import React from "react";
import { data, Link } from "react-router-dom";

const ArticleItem = ({ title, date, thumbnail }) => {
  return (
    <div className="w-full border-b border-zinc-200 py-2">
      <div className="flex items-center gap-x-4">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="h-[80px] aspect-video object-cover rounded-md"
        />
        <div>
          <h3 className="text-sm font-medium mb-2">{title}</h3>
          <p className="text-xs mb-4 text-zinc-500">{date}</p>
          <div className="flex items-center gap-x-4">
            <Link to="/" className="text-sm">
              Edit
            </Link>
            <button className="text-sm text-rose-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
