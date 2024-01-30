import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Link } from "react-scroll";
import Image1 from "../../public/dark_logo.png";
import Image2 from "../../public/dark_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();
  const overlay = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      window.onscroll = () => {
        if (window && window.pageYOffset >= 0) {
          navbar.current.classList.add("shadow");
        } else {
          navbar.current.classList.remove("shadow");
        }
      };
    }
    return () => {
      window.onscroll = null;
    };
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      // Set dark theme as default
      setTheme("dark");
    }
  }, [mounted, setTheme]);

  useEffect(() => {
    const closeMenu = () => {
      setToggleMenu(false);
    };

    if (toggleMenu) {
      overlay.current.addEventListener("click", closeMenu);
    } else {
      overlay.current.removeEventListener("click", closeMenu);
    }

    return () => {
      overlay.current.removeEventListener("click", closeMenu);
    };
  }, [toggleMenu]);

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 pt-1 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto ">
        <Link to={"/"} smooth={true} offset={0} duration={1000}>
          <h2 className="text-3xl">
            {theme === "dark" ? (
              <Image src={Image1} alt="Dark Image" width={100} />
            ) : (
              <Image src={Image2} alt="light" width={100} />
            )}
          </h2>
        </Link>

        <div>
          <ul
            ref={overlay}
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
            } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "features", "pricing", "Maps", "testimonial"].map(
              (link) => (
                <li
                  key={link}
                  className={`${
                    selectedItem === link ? "text-rose-600" : ""
                  } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600 cursor-pointer`}
                  onClick={() => setSelectedItem(link)}
                >
                  <Link to={`${link}`} smooth={true} offset={0} duration={1000}>
                    {link}
                  </Link>
                </li>
              )
            )}

            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link href="#" target="_blank">
                <FacebookOutlinedIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link target="_blank" href="#">
                <LinkedInIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <a
                href="https://www.instagram.com/pinnacle_airoli?igshid=ZHF5aW5vNjVnMmM="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button
            className="capitalize text-xs sm:text-sm border-2 hover:border-2 font-semibold sm:py-2 py-1 px-2 sm:px-4 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full"
            onClick={() => {
              window.location.href = "https://wa.me/+917272883030";
            }}
          >
            Contact Us
          </button>

          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white pr-4" : "text-black pr-4"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
