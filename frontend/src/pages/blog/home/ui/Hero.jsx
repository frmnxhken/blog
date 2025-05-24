import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    setKeyword(e.target.value);

    if (e.type === "keydown" && e.key === "Enter") {
      navigate("/search?key=" + keyword);
    }
  };

  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-32">
      <div className="w-[80%] sm:w-3/5 mx-auto text-center">
        <h1 className="font-bold text-4xl sm:text-5xl">
          Upgrade Your Knowledge In The Future
        </h1>
        <div className="mt-12 flex items-center justify-between gap-1">
          <Input
            onChange={handleSearch}
            onKeyDown={handleSearch}
            placeholder={"Search title.."}
            className="w-full"
          />
          <Button onClick={() => navigate("/search?key=" + keyword)}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
