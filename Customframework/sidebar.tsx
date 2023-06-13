import React, { useState } from "react";

interface MenuItem {
  label: string;
  subMenuItems?: string[];
}

const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      label: "Menu 1",
      subMenuItems: ["Sub Menu 1", "Sub Menu 2", "Sub Menu 3"],
    },
    {
      label: "Menu 2",
      subMenuItems: ["Sub Menu 4", "Sub Menu 5", "Sub Menu 6"],
    },
    {
      label: "Menu 3",
    },
    {
      label: "Menu 4",
    },
    {
      label: "Menu 5",
      subMenuItems: ["Sub Menu 7", "Sub Menu 8", "Sub Menu 9"],
    },
  ];

  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (menuIndex: number) => {
    setActiveMenu((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            <li
              className={`menu-item ${activeMenu === index ? "active" : ""}`}
              onClick={() => handleMenuClick(index)}
            >
              {menuItem.label}
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
