import React, { useState } from "react";
import InputField from "./textfield";
import Button from "./button";

const Navbar = ({ url, loggedIn, setLoggedIn }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [loggedIn, setLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowMenu(false);
    console.log("Logged out");
  };

  return (
    <nav className="navbar">
      {loggedIn && (
        <div className="navbar-avatar">
          <img
            src={url}
            alt="Avatar"
            className="navbar-avatar-image"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="opions-menu">
              <ul>
                <li onClick={handleLogout}>Log out</li>
                <li>Settings</li>
              </ul>
            </div>
          )}
        </div>
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
