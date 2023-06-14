import React, { useState } from "react";
import { ContactPage as ContactPageIcon } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

interface MenuItem {
  label: string;
  icon?: any;
  subMenuItems?: string[];
}

const Sidebar = ({ url }: { url: string }) => {
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: <HomeIcon />,
      subMenuItems: ["Sub Menu 1", "Sub Menu 2", "Sub Menu 3"],
    },
    {
      label: "Contact",
      icon: <ContactPageIcon />,
      subMenuItems: ["Sub Menu 4", "Sub Menu 5", "Sub Menu 6"],
    },
    {
      label: "About",
      icon: <InfoIcon />,
    },
    {
      label: "Menu 4",
      icon: <ContactPageIcon />,
    },
    {
      label: "Menu 5",
      icon: <ContactPageIcon />,
      subMenuItems: ["Sub Menu 7", "Sub Menu 8", "Sub Menu 9"],
    },
  ];

  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (menuIndex: number) => {
    setActiveMenu((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="navbar-avatar">
          <img src={url} alt="Avatar" className="navbar-avatar-image" />
          <h2>Uzair Zahoor</h2>
          <h5>Software Engineer</h5>
        </div>
      </div>
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            <li
              className={`menu-item ${activeMenu === index ? "active" : ""}`}
              onClick={() => handleMenuClick(index)}
            >
              <span> {menuItem.icon}</span>
              <span>{menuItem.label}</span>
            </li>
            {activeMenu === index && menuItem.subMenuItems && (
              <ul className="sub-menu">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <li className="sub-menu-item" key={subIndex}>
                    {subMenuItem}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
