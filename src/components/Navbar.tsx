import classNames from "classnames";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../utils/constants";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div className="items-center gap-4 hidden lg:flex">
      <div className="flex items-center gap-4">
        {MENU_ITEMS.map((item, index) => {
          if (item.isChildren) {
            return (
              <button
                key={index}
                className="flex items-center text-[#272D37] font-semibold px-4 py-1.5 rounded-md hover:bg-gray-100 transition-all duration-300"
              >
                <span>{item.label}</span>
                <ChevronDown size={16} />
              </button>
            );
          }

          return (
            <Link
              key={index}
              to={item.href || ""}
              className="flex items-center text-[#272D37] font-semibold px-4 py-1.5 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-2 ">
        <div
          className={classNames(
            "transition-all duration-300",
            showSearchBar ? "block" : "hidden"
          )}
        >
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/80"
          />
        </div>
        <button
          onClick={() => setShowSearchBar(!showSearchBar)}
          className="p-2.5 rounded-md text-[#272D37] hover:bg-gray-100 transition-all duration-300"
        >
          <Search className="size-5" />
        </button>
      </div>
      <button className="bg-[#FFA229] flex items-center justify-center py-2 md:py-3 px-4 md:px-6 font-bold text-white md:text-base text-sm text-center rounded-[4px] hover:shadow-lg border border-gray-200 hover:text-[#FFA229] z-10  overflow-hidden transition-all duration-300 relative before:absolute before:inset-0 before:bg-white before:translate-y-full hover:before:translate-y-0 before:transition before:duration-300 before:-z-10">
        Talk an Expert
      </button>
    </div>
  );
};

export default Navbar;
