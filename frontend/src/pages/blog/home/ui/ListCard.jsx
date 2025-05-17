import React from "react";

const ListCard = ({ title, thumbnail, date }) => {
  return (
    <div className="border-2 border-zinc-200 rounded-xl p-2">
      <div className="flex justify-between gap-4">
        <div className="w-full">
          <img
            className="rounded-lg w-full object-cover max-h-[500px]"
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="w-2/4 p-8">
          <div className="flex flex-col justify-between h-full">
            <h3 className="font-semibold text-4xl">{title}</h3>
            <p className="text-zinc-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
