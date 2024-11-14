import {
  FaBuilding,
  FaDumbbell,
  FaFilm,
  FaFlag,
  FaFlask,
  FaGem,
  FaGlobe,
  FaMicrochip,
  FaNewspaper,
  FaStar,
} from "react-icons/fa";
import { useMenuContext } from "../../context/MenuContext";
import menuData from "./menu.json";
import { FaEarthAmericas, FaLocationDot, FaMagnifyingGlass, FaPersonBiking } from "react-icons/fa6";
import { useState } from "react";

interface NavigationProps {
  className?: string;
}

const Icon = ({ type, className }: { type: string; className: string }) => {
  switch (type) {
    case "globe":
      return <FaGlobe className={className} />;
    case "flag":
      return <FaFlag className={className} />;
    case "news":
      return <FaNewspaper className={className} />;
    case "earth":
      return <FaEarthAmericas className={className} />;
    case "business":
      return <FaBuilding className={className} />;
    case "tech":
      return <FaMicrochip className={className} />;
    case "pin":
      return <FaLocationDot className={className} />;
    case "star":
      return <FaStar className={className} />;
    case "bike":
      return <FaPersonBiking className={className} />;
    case "flask":
      return <FaFlask className={className} />;
    case "gym":
      return <FaDumbbell className={className} />;
    case "film":
      return <FaFilm className={className} />;
    case "search":
      return <FaMagnifyingGlass className={className} />;

    default:
      return <FaGem className={className} />;
  }
};

const Navigation = ({ className }: NavigationProps) => {
  const { showMenu } = useMenuContext();
  const [activeMenu, setActiveMenu] = useState<number>(1);

  const onMenuEntryClicked = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menuId: number
  ) => {
    e.preventDefault();
    setActiveMenu(menuId);
  };

  return (
    <nav
      className={`${className} relative hidden ${
        showMenu ? "xs:block" : ""
      } md:block md:overflow-y-auto`}
    >
      <ul className="smallDeviceMenu bigDeviceMenu">
        {menuData.map((menuEntry) => (
          <a
            key={`${menuEntry.id}-${menuEntry.label}`}
            href={menuEntry.url}
            rel="noopener noreferrer"
            onClick={(e) => onMenuEntryClicked(e, menuEntry.id)}
            className={`flex relative text-nowrap ${
              activeMenu === menuEntry.id ? "bg-blue-200 md:bg-transparent md:text-blue-500" : ""
            } p-5 md:p-0 text-darkBackground-2 rounded-full ${menuEntry.className || ""}`}
          >
            <div className="md:hidden">
              <Icon type={menuEntry.icon || ""} className="size-5 mr-5" />
            </div>
            <li className="relative md:pb-2">
              {menuEntry.label}
              <div
                className={`hidden ${
                  activeMenu === menuEntry.id ? "md:block" : ""
                } bg-blue-500 absolute h-1 w-full rounded-full bottom-0`}
              ></div>
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
