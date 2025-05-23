import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/app/contexts/AuthContext";

const useAuthLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(form);

    if (response.success) {
      return navigate("/dashboard");
    } else if (response.errors) {
      return setErrors(response.errors);
    } else {
      return navigate("/login", {
        state: {
          type: "danger",
          message: "Invalid Email or Password!",
        },
      });
    }
  };
  return {
    handleInput,
    handleSubmit,
    errors,
  };
};

export default useAuthLogin;
