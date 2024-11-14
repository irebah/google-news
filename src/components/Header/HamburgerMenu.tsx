import { SVGProps } from "react";
import { useMenuContext } from "../../context/MenuContext";

const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => {
  const { toogleMenu } = useMenuContext();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
      role="button"
      onClick={toogleMenu}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
export default HamburgerMenu;
