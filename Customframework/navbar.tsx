import React, { useState, useCallback } from "react";
import InputField from "./textfield";
import Button from "./button";
import Tooltip from "./tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "./snackbar";

interface NavbarProps {
  url: string;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  showBar: (width: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  url,
  loggedIn,
  setLoggedIn,
  showBar,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    setLoggedIn(false);
    setShowMenu(false);
  }, [setLoggedIn]);

  const handleSideBar = useCallback(() => {
    showBar("260px");
  }, [showBar]);

  return (
    <nav className="navbar">
      {loggedIn && (
        <>
          <div onClick={handleSideBar}>
            <Tooltip title="menu">
              <MenuIcon sx={{ color: "white", cursor: "pointer" }} />
            </Tooltip>
          </div>
          <div className="navbar-avatar">
            <Tooltip title="Click">
              <img
                src={url}
                alt="Avatar"
                className="navbar-avatar-image"
                onClick={() => setShowMenu(!showMenu)}
              />
            </Tooltip>
            {showMenu && (
              <>
                <div className="opions-menu">
                  <ul>
                    <li onClick={handleLogout}>Log out</li>
                    <li>Settings</li>
                  </ul>
                </div>
                <Snackbar message="You Wanna Log out!" />
              </>
            )}
          </div>
          <Snackbar message="Hello World How Are You?" />
        </>
      )}
      <div className="navbar-options">
        {!loggedIn && (
          <Button style={{ backgroundColor: "gray" }} onClick={handleModalOpen}>
            SignIn
          </Button>
        )}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign In</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoggedIn(true);
                setIsModalOpen(false);
              }}
            >
              <InputField
                type="text"
                placeholder="Username"
                style={{ marginBottom: 12 }}
              />
              <InputField
                type="password"
                placeholder="Password"
                style={{ marginBottom: 12 }}
              />
              <Button type="submit">Sign In</Button>
              <Button
                style={{
                  marginTop: 10,
                  backgroundColor: "gray",
                }}
                onClick={handleModalClose}
              >
                Close
              </Button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
