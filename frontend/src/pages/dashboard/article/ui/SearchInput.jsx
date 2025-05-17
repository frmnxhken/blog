import React from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

const SearchInput = () => {
  return (
    <div className="flex w-full items-center gap-x-4">
      <Input placeholder="Search article..." className="w-full" />
      <Button>Search</Button>
    </div>
  );
};

export default SearchInput;
