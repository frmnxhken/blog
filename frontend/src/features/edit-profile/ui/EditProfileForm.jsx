import React from "react";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import { useEditProfile } from "../hooks";

const EditProfileForm = () => {
  const { form, errors, handleInput, handleSubmit } = useEditProfile();

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        <Input
          name="instagram"
          value={form.instagram}
          onChange={(e) => handleInput("instagram", e.target.value)}
          label="Instagram"
          placeholder="Link your Instagram"
          feedback={errors.instagram}
        />
        <Input
          name="facebook"
          value={form.facebook}
          onChange={(e) => handleInput("facebook", e.target.value)}
          label="Facebook"
          placeholder="Link your Facebook"
          feedback={errors.facebook}
        />
        <Input
          name="twitter"
          value={form.twitter}
          onChange={(e) => handleInput("twitter", e.target.value)}
          label="Twitter"
          placeholder="Link your twitter"
          feedback={errors.twitter}
        />
        <Input
          name="youtube"
          value={form.youtube}
          onChange={(e) => handleInput("youtube", e.target.value)}
          label="Youtube"
          placeholder="Link your Youtube"
          feedback={errors.youtube}
        />
      </div>
      <Button>Save Changes</Button>
    </form>
  );
};

export default EditProfileForm;
