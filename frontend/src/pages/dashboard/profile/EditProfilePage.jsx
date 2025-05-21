import React from "react";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";

const EditProfilePage = () => {
  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        <Input label="Instagram" placeholder="Link your Instagram" />
        <Input label="Facebook" placeholder="Link your Facebook" />
        <Input label="Twitter" placeholder="Link your twitter" />
        <Input label="Youtube" placeholder="Link your Youtube" />
      </div>
      <Button>Save Changes</Button>
    </form>
  );
};

export default EditProfilePage;
