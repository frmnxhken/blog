import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Header = ({ thumbnail, title, date, user }) => {
  const CONTACTS = [
    {
      name: "instagram",
      icon: <FaInstagram size={20} />,
    },
    {
      name: "facebook",
      icon: <FaFacebookF size={20} />,
    },
    {
      name: "twitter",
      icon: <FaXTwitter size={20} />,
    },
    {
      name: "youtube",
      icon: <FaYoutube size={20} />,
    },
  ];
  return (
    <div className="border-b-2 border-zinc-200 pb-12">
      {thumbnail && (
        <img
          src={thumbnail}
          alt="thumbnail"
          className="object-cover w-full rounded-xl mb-8"
        />
      )}
      <h1 className="font-bold text-2xl sm:text-4xl w-full mb-8 sm:mb-12 capitalize">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-md text-zinc-500">{date}</p>
        <div className="flex gap-x-4">
          {CONTACTS.map(
            (contact, i) =>
              user?.[contact.name] && (
                <a
                  key={i}
                  href={user[contact.name]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon}
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
