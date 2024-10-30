import { Link } from "react-router-dom";
import { useState } from "react";
import footerLogo from "/assets/images/800bbatterywhite.png";
import Menu from "./Menu";

const MobileMenu = ({ handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    setIsActive((prev) =>
      prev.key === key ? { status: false, key: "" } : { status: true, key }
    );
  };

  return (
    <div className="fixed top-16 md:hidden p-4 left-0 w-[70%] h-full pt-16 bg-black text-white z-20">
      <div className="relative p-2 ">
        {/* Menu Links */}
        <div>
          <Menu />
        </div>

        {/* Contact Information */}
        <ul className="mt-0 text-sm text-gray-400">
          <li className="flex items-center mb-2">
            <i className="fa fa-envelope text-orange-400 mr-2 "></i>
            <Link
              to="mailto:support@800bbattery.com"
              className="hover:text-orange-300"
            >
              support@800bbattery.com
            </Link>
          </li>
          <li className="flex items-center">
            <i className="fa fa-phone-alt text-orange-400 mr-2"></i>
            <Link to="tel:+971509344668" className="hover:text-orange-300">
              +971 50934 4668
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
