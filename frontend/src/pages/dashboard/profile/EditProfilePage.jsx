import React from "react";
import { useLocation } from "react-router-dom";
import { EditProfileForm } from "@/features/edit-profile/ui";

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
