import React from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { useAuth } from "@/app/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: "wahyudi@gmail.com",
      password: "123",
    };
    const success = await login(payload);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-[400px] w-[80%]">
        <h1 className="text-3xl font-semibold text-center mb-12">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input label="Email" placeholder="Input your email.." />
          <Input type="password" label="Password" />
          <Button className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
