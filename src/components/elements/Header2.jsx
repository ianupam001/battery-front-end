import { Link } from "react-router-dom";
import Menu from "../Menu";
import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";
import { Button } from "flowbite-react";
import headerLogo from "/assets/images/800bbattery.png";

export default function Header2() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header-two ${isSticky ? "sticky" : ""}`}>
        <div className="main-menu-two__top hidden md:block">
          <div className="container">
            <div className="main-menu-two__top-inner">
              <div className="main-menu-two__top-left">
                <div className="main-menu-two__social">
                  <Link to="https://www.facebook.com/profile.php?id=61565118175123">
                    <i className="icon-facebook"></i>
                  </Link>
                  <Link to="https://www.instagram.com/800b.battery/">
                    <i className="icon-instagram"></i>
                  </Link>
                </div>
                <p className="main-menu-two__text">Welcome to 800 BBattery</p>
              </div>
              <ul className="list-unstyled main-menu-two__contact-list">
                <li>
                  <div className="icon">
                    <i className="icon-location"></i>
                  </div>
                  <div className="text">
                    <p>Al Asayel Street - 160St Warehouse no. 2 - 318th Rd</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-envelope"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link to="mailto:support@800bbattery.com">
                        support@800bbattery.com
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-two bg-color-extra">
          <div className="main-menu-two__wrapper">
            <div className="container flex justify-between items-center">
              <Link to="/" className="main-menu-two__logo">
                <img src={headerLogo} alt="Logo" />
              </Link>

              <div className="hidden md:flex">
                <Menu />
              </div>

              <div className="hidden md:flex">
                <Button
                  onClick={() => setModalOpen(true)}
                  className="main-menu-two__btn thm-btn"
                >
                  Get Appointment
                </Button>
                <ContactModal
                  isOpen={isModalOpen}
                  onClose={() => setModalOpen(false)}
                />
              </div>

              <button
                className="md:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#222121] text-white z-30 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-5 mt-20">
          <div className="mb-6">
            <Menu />
          </div>
          <Button
            onClick={() => {
              setModalOpen(true);
              setIsMenuOpen(false);
            }}
            size="md"
            className="w-full mt-4  bg-orange-400 hover:bg-orange-500"
          >
            Get Appointment
          </Button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
