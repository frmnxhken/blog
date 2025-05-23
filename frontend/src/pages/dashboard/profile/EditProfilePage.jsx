import React from "react";
import { EditProfileForm } from "@/features/edit-profile/ui";
import { useLocation } from "react-router-dom";

const EditProfilePage = () => {
  const alert = useLocation().state;
  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <EditProfileForm />;
    </>
  );
};

export default EditProfilePage;
