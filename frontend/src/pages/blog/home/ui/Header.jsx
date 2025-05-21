import React from "react";
import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-end-safe gap-6">
      <h1 className="text-xl sm:text-3xl font-bold">Article Recent</h1>
      <Button onClick={() => navigate("/article")} variant="light">
        See More
      </Button>
    </div>
  );
};

export default Header;
