import React from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { useChangePassword } from "../hooks";

const ChangePasswordForm = () => {
  const { form, errors, handleInput, handleSubmit } = useChangePassword();
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 mb-6 gap-y-4">
        <Input
          type="password"
          name="current_password"
          value={form.current_password}
          onChange={(e) => handleInput("current_password", e.target.value)}
          label="Current Password"
          feedback={errors.current_password}
        />
        <Input
          type="password"
          name="new_password"
          value={form.new_password}
          onChange={(e) => handleInput("new_password", e.target.value)}
          label="New Password "
          feedback={errors.new_password}
        />
        <Input
          type="password"
          value={form.new_password_confirmation}
          name="new_password_confirmation"
          onChange={(e) =>
            handleInput("new_password_confirmation", e.target.value)
          }
          label="Confirmation Password"
          feedback={errors.new_password_confirmation}
        />
      </div>
      <Button>Change Password</Button>
    </form>
  );
};

export default ChangePasswordForm;
