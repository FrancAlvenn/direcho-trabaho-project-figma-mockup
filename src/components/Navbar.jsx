import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFilm } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 h-[68px] px-[32px]  flex justify-between items-center z-50">
      <div>
        <img
          src="../assets/images/nav_logo.png"
          alt="logo"
          className="h-[48px] w-[63px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className="relative flex items-center">
        {/* Events */}
        <li className="text-white mr-[32px] flex items-center gap-[16.18px] cursor-pointer">
          <FontAwesomeIcon icon={faFilm} />
          Events
        </li>

        <li className="flex gap-[10.25px] bg-[#1E1F22] h-[40px] rounded-full items-center">
          {/* Hamburger Menu */}
          <div
            className="flex flex-col gap-[6px] text-white ml-[14.25px] my-[14px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
          </div>

          {/* User Profile */}
          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full text-white bg-[#101010] mr-[4px] my-[4px] p-[14px] cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </li>

        {/* Nav Menu */}
        {isOpen && <NavMenu />}
      </ul>
    </nav>
  );
}

export default Navbar;
