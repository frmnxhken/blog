import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/app/contexts/AuthContext";

const useEditProfile = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    instagram: user.instagram,
    facebook: user.facebook,
    twitter: user.twitter,
    youtube: user.youtube,
  });

  useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem("user"));

    setForm({
      instagram: newUser.instagram,
      facebook: newUser.facebook,
      twitter: newUser.twitter,
      youtube: newUser.youtube,
    });
  }, []);

  const [errors, setErrors] = useState({});

  const handleInput = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: (form) => updateProfile(form),
    onError: (error) => {
      setErrors(error.response.data.errors);
    },
    onSuccess: (data) => {
      setErrors({});
      localStorage.setItem("user", JSON.stringify(data.user));
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
