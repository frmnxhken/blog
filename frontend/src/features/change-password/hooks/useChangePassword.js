import { useState } from "react";
import { updatePassword } from "../api";
import { useMutation } from "@tanstack/react-query";

const useChangePassword = () => {
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
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return {
    errors,
    handleInput,
    handleSubmit,
  };
};

export default useChangePassword;
