import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RiFullscreenLine, RiMenu3Line, RiNotificationLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";

const Topbar = ({ mobMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.log(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  const handleLogin = () => {
    handleClose();
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="topbar">
      <div className="top_left">
        <h2>HRMS Dashboard</h2>
      </div>
      <div className="top_right">
        <button className="top_notfi" onClick={handleFullscreenToggle}>
          <RiFullscreenLine className="icon" />
        </button>
        <button className="top_notfi">
          <RiNotificationLine className="icon" />
        </button>
        <button className="top_notfi top_menu" onClick={mobMenu}>
          <RiMenu3Line className="icon" />
        </button>
        <div className="top_profile">
          <img
            src="https://w0.peakpx.com/wallpaper/592/1017/HD-wallpaper-memoji-emoji-album-artwork-cover-art-emoji-stickers-iphone-boy-emoji.jpg"
            alt=""
            className="profile_img"
          />
          <div
            className="profile_text"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <h4>Rose Berry Shanrin</h4>
            <p>Admin</p>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogin}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
