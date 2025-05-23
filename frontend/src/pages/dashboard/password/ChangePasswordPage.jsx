import React from "react";
import { ChangePasswordForm } from "@/features/change-password/ui";
import { useLocation } from "react-router-dom";
import Alert from "@/shared/ui/Alert";

const ChangePasswordPage = () => {
  const alert = useLocation().state;
  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <ChangePasswordForm />
    </>
  );
};

export default ChangePasswordPage;
