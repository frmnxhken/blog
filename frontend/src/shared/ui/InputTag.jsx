import React, { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import Feedback from "./Feedback";

const InputTag = ({
  value = [],
  onChange,
  delimiter = " ",
  label,
  feedback,
  className,
}) => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState(value);

  useEffect(() => {
    setTags(value);
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === delimiter) {
      e.preventDefault();
      const trimmed = input.trim();
      if (trimmed && !tags.includes(trimmed)) {
        const newTags = [...tags, trimmed];
        setTags(newTags);
        onChange?.(newTags);
        setInput("");
      }
    }

    if (e.key === "Backspace" && input === "" && tags.length > 0) {
      const newTags = tags.slice(0, -1);
      setTags(newTags);
      onChange?.(newTags);
    }
  };

  const handleRemove = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onChange?.(newTags);
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm text-zinc-700 font-medium">{label}</label>
      )}
      <div className="flex flex-wrap items-center gap-2 w-full bg-slate-100 text-zinc-800 px-4 py-2 rounded-lg text-sm focus:outline-none">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-zinc-800 px-2 py-1 rounded-full text-sm text-white gap-x-2"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemove(index)}
              className="text-white cursor-pointer"
            >
              <HiOutlineXMark size={13} />
            </button>
          </div>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter..."
          className="flex-1 outline-none text-sm py-1"
        />
      </div>
      {feedback && <Feedback text={feedback} />}
    </div>
  );
};

export default InputTag;
