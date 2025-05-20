import { useAuth } from "@/app/contexts/AuthContext";
import React from "react";
import {
  HiOutlineArrowLeftEndOnRectangle,
  HiOutlineDocument,
  HiOutlineKey,
  HiOutlinePencilSquare,
  HiOutlineUserCircle,
} from "react-icons/hi2";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const { logout } = useAuth();

  const navigations = [
    {
      title: "Dashboard",
      items: [
        {
          label: "Articles",
          icon: <HiOutlineDocument size={18} />,
          to: "/dashboard/article",
        },
        {
          label: "Write",
          icon: <HiOutlinePencilSquare size={18} />,
          to: "/dashboard/write",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          label: "Edit Profile",
          icon: <HiOutlineUserCircle size={18} />,
          to: "/dashboard/profile",
        },
        {
          label: "Change Password",
          icon: <HiOutlineKey size={18} />,
          to: "/dashboard/password",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen border-r border-zinc-200 sticky top-0">
      <div className="container py-6">
        {navigations.map((section, index) => (
          <div key={index} className={index > 0 ? "mt-12" : ""}>
            <h3 className="text-md">{section.title}</h3>
            <ul className="mt-6">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-x-4 p-3 ${
                    item.to === currentLocation
                      ? "bg-zinc-100 border-r-2 border-zinc-800"
                      : ""
                  }`}
                >
                  {item.icon}
                  <Link
                    to={item.to}
                    className="text-sm text-zinc-700 font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={logout}
          className="text-sm flex items-center gap-4 mt-12 p-3 cursor-pointer"
        >
          <HiOutlineArrowLeftEndOnRectangle size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
