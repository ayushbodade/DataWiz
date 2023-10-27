import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./DriveHeader.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Storage-PNG-Picture.png"
          alt="drive-logo"
        />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
            <SearchIcon />
          <input type="text" placeholder="Search in Drive"></input>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;