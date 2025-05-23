import React from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { useAuthLogin } from "../hooks";

const LoginForm = () => {
  const { handleInput, handleSubmit, errors } = useAuthLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        name="email"
        onChange={(e) => handleInput("email", e.target.value)}
        label="Email"
        placeholder="Input your email.."
        feedback={errors.email}
      />
      <Input
        name="password"
        onChange={(e) => handleInput("password", e.target.value)}
        type="password"
        label="Password"
        feedback={errors.password}
      />
      <Button className="w-full">Login</Button>
    </form>
  );
};

export default LoginForm;
