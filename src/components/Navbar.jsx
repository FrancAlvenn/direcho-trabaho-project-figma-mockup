function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 h-[48px] mx-[32px] mt-[20px] flex justify-between items-center">
      <div>
        <img
          src="../assets/images/nav_logo.png"
          alt="logo"
          className="h-[48px] w-[63px]"
        />
      </div>
      <ul className="flex items-center">
        {/* Events */}
        <li className="text-white mr-[32px]">Events</li>

        <li className="flex gap-[10.25px] bg-[#1E1F22] h-[40px] w-[80px] rounded-full items-center">
          {/* Hamburger Menu */}
          <div className="flex flex-col gap-[6px] text-white ml-[14.25px] my-[14px] cursor-pointer">
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
            <span className="border-[1.5px] w-[19.5px] rounded-sm"></span>
          </div>

          {/* User Profile */}
          <div></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
