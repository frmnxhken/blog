import React from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-[400px] w-[80%]">
        <h1 className="text-3xl font-semibold text-center mb-12">Login</h1>
        <form className="space-y-3">
          <Input label="Email" placeholder="Input your email.." />
          <Input type="password" label="Password" />
          <Button className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
