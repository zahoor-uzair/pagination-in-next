import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "./tooltip";
interface MenuItem {
  label: string;
  icon: React.ReactElement;
  subMenuItems?: string[];
}
interface SidebarProps {
  url: string;
  hideBar: (width: string) => void;
  menuItems: MenuItem[];
}

interface SidebarItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isActive,
  onClick,
}) => (
  <li className={`menu-item ${isActive ? "active" : ""}`} onClick={onClick}>
    <span>{item.icon}</span>
    <span>{item.label}</span>
  </li>
);

const SubMenuItem: React.FC<{ item: string }> = ({ item }) => (
  <li className="sub-menu-item">{item}</li>
);

const Sidebar: React.FC<SidebarProps> = ({ url, hideBar, menuItems }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (menuIndex: number) => {
    setActiveMenu((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
  };

  const handleSideBar = () => {
    hideBar("0px");
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <div
          onClick={handleSideBar}
          style={{ position: "absolute", top: 7, right: 8, cursor: "pointer" }}
        >
          <Tooltip title="Close">
            <CloseIcon />
          </Tooltip>
        </div>
        <div>
          <img src={url} alt="Avatar" />
        </div>
        <h2>Uzair Zahoor</h2>
        <h5>Software Engineer</h5>
      </div>
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={index}>
            <SidebarItem
              item={menuItem}
              isActive={activeMenu === index}
              onClick={() => handleMenuClick(index)}
            />
            {activeMenu === index && menuItem.subMenuItems && (
              <ul className="sub-menu">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <SubMenuItem item={subMenuItem} key={subIndex} />
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
