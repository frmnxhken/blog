import React, { useState, useRef, useEffect } from "react";

const InputImage = ({
  label = "Your Thumbnail",
  maxHeight = 400,
  onImageChange = () => {},
  image,
  previewClassName = "w-full h-full object-cover rounded-lg",
}) => {
  const [preview, setPreview] = useState(image);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (image === null) {
      setPreview(image);
    }
  }, [image]);

  const handleFiles = (files) => {
    const file = files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onImageChange(file);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      onImageChange(null);
    }
  };

  const handleInputChange = (e) => {
    return handleFiles(e.target.files);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div className="w-full">
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        {label}
      </label>

      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`relative cursor-pointer border-2 border-dashed rounded-lg
          flex items-center justify-center
          overflow-hidden
          ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-slate-300 bg-white"
          }
          transition-colors
          aspect-[4/3] w-full`}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {!preview && (
          <p className="text-gray-500 px-4 text-center select-none">
            Drop your image here or click to upload
          </p>
        )}

        {preview && (
          <img src={preview} alt="Preview" className={previewClassName} />
        )}

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
export default InputImage;
