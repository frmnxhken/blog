import React, { useState } from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

const SearchInput = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex w-full items-center gap-x-4">
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search article..."
        className="w-full"
      />
      <Button
        onClick={() => {
          onSearch(keyword);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
