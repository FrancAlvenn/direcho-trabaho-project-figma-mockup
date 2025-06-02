import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFilm } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 right-0 h-[48px] mx-[32px] mt-[20px] flex justify-between items-center cursor-pointer">
      <div>
        <img
          src="../assets/images/nav_logo.png"
          alt="logo"
          className="h-[48px] w-[63px]"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className="flex items-center">
        {/* Events */}
        <li className="text-white mr-[32px] flex items-center gap-[16.18px] cursor-pointer">
          <FontAwesomeIcon icon={faFilm} />
          Events
        </li>

        <li className="flex gap-[10.25px] bg-[#1E1F22] h-[40px] rounded-full items-center">
          {/* Hamburger Menu */}
          <div className="flex flex-col gap-[6px] text-white ml-[14.25px] my-[14px] cursor-pointer">
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
          </div>

          {/* User Profile */}
          <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full text-white bg-[#101010] mr-[4px] my-[4px] p-[14px] cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
