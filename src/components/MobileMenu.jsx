import { Link } from "react-router-dom";
import { useState } from "react";
import footerLogo from "/assets/images/800bbatterywhite.png";

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
    <div className="fixed top-24 md:hidden p-4 left-0 w-1/2 h-full pt-16 bg-black text-white z-20">
      <div className="relative p-6">
        {/* Menu Links */}
        <div>
          <ul>
            {[
              "Home",
              "About",
              "Pages",
              "Services",
              "Shop",
              "Blog",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="flex justify-between items-center text-lg hover:text-orange-300"
                  onClick={() => handleToggle(index)}
                >
                  {item}
                  <span
                    className={`fa ${
                      isActive.key === index
                        ? "fa-angle-down"
                        : "fa-angle-right"
                    } text-orange-400`}
                  />
                </Link>
                {isActive.key === index && (
                  <ul className="pl-4 text-gray-300 transition-all duration-300">
                    <li className="py-2">
                      <Link
                        to={`/${item.toLowerCase()}/subitem1`}
                        className="hover:text-orange-300"
                      >
                        Subitem 1
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to={`/${item.toLowerCase()}/subitem2`}
                        className="hover:text-orange-300"
                      >
                        Subitem 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <ul className="mt-6 text-sm text-gray-400">
          <li className="flex items-center mb-4">
            <i className="fa fa-envelope text-orange-400 mr-2 "></i>
            <Link
              to="mailto:needhelp@elitecons.com"
              className="hover:text-orange-300"
            >
              needhelp@elitecons.com
            </Link>
          </li>
          <li className="flex items-center">
            <i className="fa fa-phone-alt text-orange-400 mr-2"></i>
            <Link to="tel:6668880000" className="hover:text-orange-300">
              666 888 0000
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          <Link to="https://twitter.com" aria-label="Twitter">
            <i className="fa fa-twitter text-orange-400"></i>
          </Link>
          <Link to="https://facebook.com" aria-label="Facebook">
            <i className="fa fa-facebook text-orange-400"></i>
          </Link>
          <Link to="https://pinterest.com" aria-label="Pinterest">
            <i className="fa fa-pinterest text-orange-400"></i>
          </Link>
          <Link to="https://instagram.com" aria-label="Instagram">
            <i className="fa fa-instagram text-orange-400"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
