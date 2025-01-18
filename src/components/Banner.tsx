import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../utils/constants";

const Banner = () => {
  return (
    <div className="bg-primary ">
      <div className="max-w-[1400px] px-4 md:px-6 lg:px-8 mx-auto flex justify-center md:justify-end py-2">
        <div className="py-1 flex items-center md:items-start sm:flex-row flex-col sm:gap-0 gap-4">
          <div className="flex h-full">
            <Link
              to="mailto:www.registerkaro.in"
              className="flex items-center gap-1.5 text-white relative group hover:opacity-80 transition-all duration-300"
            >
              <div className="absolute bg-white bottom-0 h-px w-full left-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
              <img src="/assets/mail.svg" alt="Mail" className="h-2.5 w-4" />
              <span className="text-sm">www.registerkaro.in</span>
            </Link>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#D0D0D0] to-transparent mx-4"></div>
            <Link
              to="tel:+918447746183"
              className="flex items-center gap-1.5 text-white relative group hover:opacity-80 transition-all duration-300"
            >
              <div className="absolute bg-white bottom-0 h-px w-full left-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
              <img src="/assets/phone.svg" alt="phone" className="h-2.5 w-4" />
              <span className="text-sm">+918447746183</span>
            </Link>
          </div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-[#D0D0D0] to-transparent mx-4 sm:block hidden"></div>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ name, link, logo }) => (
              <Link
                to={link}
                key={name}
                className="text-white hover:opacity-80 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} alt={name} className="h-[18px] w-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
