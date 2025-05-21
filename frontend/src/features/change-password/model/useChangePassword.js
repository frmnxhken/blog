import { useState } from "react";
import { updatePassword } from "../api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updatePassword(form);
    console.log(response);

    if (response.success) {
      setErrors({});
    } else {
      setErrors(response.errors);
    }
  };

  return {
    errors,
    handleInput,
    handleSubmit,
  };
};

export default useChangePassword;
