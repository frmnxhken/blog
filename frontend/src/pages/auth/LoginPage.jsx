import React from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "@/features/auth/ui";
import Alert from "@/shared/ui/Alert";

const LoginPage = () => {
  const alert = useLocation().state;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-[400px] w-[80%]">
          <h1 className="text-3xl font-semibold text-center mb-12">Login</h1>
          {alert && <Alert type={alert?.type} message={alert?.message} />}
          <LoginForm />;
        </div>
      </div>
    </>
  );
};

export default LoginPage;
