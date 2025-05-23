import { useState } from "react";
import { updatePassword } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

const useChangePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: (form) => updatePassword(form),
    onError: (error) => {
      setErrors(error.response.data.errors);
    },
    onSuccess: () => {
      setErrors({});
      setForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
      navigate(location.pathname, {
        state: { type: "success", message: "Password changed successfully!" },
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

export default useChangePassword;
