import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-white p-12 lg:pl-[120px] lg:pr-[222px] pt-[48.5px] border-t border-b border-[#1E1F22] xl:h-[294.5px]">
      <section className="flex flex-col items-center justify-between max-w-[1440px] gap-12 lg:flex-row lg:items-start">
        {/* Logo */}
        <div className="h-[48px] w-[64px]">
          <img src="../assets/images/nav_logo.png" alt="logo" />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-[24px] text-center lg:text-left">
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">News</li>
          <li className="cursor-pointer">Episodes</li>
        </ul>

        <ul className="flex flex-col gap-[24px] text-center lg:text-left">
          <li className="cursor-pointer">For professionals</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Contact us</li>
          <li className="cursor-pointer">Terms & conditions</li>
        </ul>

        {/* Social Media Links*/}
        <div className="flex flex-col gap-[24px]">
          <p className="text-center lg:max-w-[382px] lg:text-left">
            Follow us on social media and join our growing community of
            performing arts enthusiasts.
          </p>
          <ul className="flex max-h-[48px] gap-[16px] justify-center lg:justify-start lg:max-w-[240px]">
            <li className="cursor-pointer rounded-full bg-[#1E1F22] p-[12px] h-[48px] w-[48px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "24px" }}
              />
            </li>
            <li className="cursor-pointer rounded-full bg-[#1E1F22] p-[12px] h-[48px] w-[48px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ fontSize: "24px" }}
              />
            </li>
            <li className="cursor-pointer rounded-full bg-[#1E1F22] p-[12px] h-[48px] w-[48px] flex justify-center items-center">
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "24px" }} />
            </li>
            <li className="cursor-pointer rounded-full bg-[#1E1F22] p-[12px] h-[48px] w-[48px] flex justify-center items-center">
              <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "24px" }} />
            </li>
          </ul>
        </div>
      </section>

      {/* Copyright */}
      <p className="mt-[40px] mb-[16px] text-center lg:text-left">
        &copy; Red Curtain Addict 2021
      </p>
    </footer>
  );
}

export default Footer;
