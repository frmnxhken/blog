import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <form>
      <div className="grid grid-cols-1 mb-6 gap-y-4">
        <Input label="Current Password" />
        <Input label="New Password " />
        <Input label="Confirmation Password" />
      </div>
      <Button>Change Password</Button>
    </form>
  );
};

export default ChangePasswordPage;
