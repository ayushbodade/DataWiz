import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const navigate = useNavigate();

  return (
    <section className="h-wrapper" style={{ background: "#131110" }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <div>
          <img
            className="hacker"
            onClick={() => navigate("/")}
            src="./datawizlogo.png"
            alt="logo"
            width={170}
            style={{ position: "absolute", top: -45, left: 100 }}
          />
        </div>
        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a onClick={() => navigate("/")} href="#value">
              Our Value
            </a>
            <a href='https://citl-gpt-banker-deployment.onrender.com/'>GPTBanker</a>
            <a href='https://cd10-2405-201-1e-5089-e0eb-a88c-de4-466.ngrok-free.app/'>AutoML</a>
            <a onClick={() => navigate("/")} href="#contact-us">
              Contact Us
            </a>
            <button className="button">
              <a onClick={() => navigate("/driveAgm")}>Drive</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
