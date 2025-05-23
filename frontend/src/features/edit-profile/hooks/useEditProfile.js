import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const useEditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: (form) => updateProfile(form),
    onError: (error) => {
      setErrors(error.response.data.errors);
    },
    onSuccess: () => {
      setErrors({});
      setForm({
        instagram: "",
        facebook: "",
        twitter: "",
        youtube: "",
      });
      navigate(location.pathname, {
        state: { type: "success", message: "Profile changed successfully!" },
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return {
    form,
    errors,
    handleInput,
    handleSubmit,
  };
};

export default useEditProfile;
