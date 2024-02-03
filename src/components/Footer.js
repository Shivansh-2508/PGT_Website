import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { useTheme } from "next-themes";
import Image1 from "../../public/dark_logo.png";
import Image2 from "../../public/light_logo.png";
import { Link } from "react-scroll";
import Pricing from "./Pricing";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              {theme === "dark" ? (
                <Image src={Image1} alt="Dark Image" width={100} />
              ) : (
                <Image src={Image2} alt="light" width={100} />
              )}
            </Link>
            <p className="max-w-md mt-4 text-sm">
              Empowering Minds, Shaping Futures: Pinnacle Group Tuitions, where
              excellence meets education.
            </p>
            <div className="flex mt-8 space-x-6">
              <Link href="#" target="_blank">
                <FacebookOutlinedIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="#" target="_blank">
                <LinkedInIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="#" target="_blank">
                <TwitterIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </Link>
              <a
                href="https://www.instagram.com/pinnacle_airoli?igshid=ZHF5aW5vNjVnMmM="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  to={"home"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>

                <Link
                  to={"pricing"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Courses
                </Link>

                <Link
                  to={"toppers"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Toppers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  to={"features"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Coaching Services
                </Link>

                <Link
                  to={"testimonial"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Teaching Reviews
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  to={"Connect"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Email Us
                </Link>

                <Link
                  to={"Maps"}
                  smooth={true}
                  offset={-150}
                  duration={100}
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Find Us
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xl text-center">
          © 2024{" "}
          <a
            href="https://www.thedd.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheDDtech
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
