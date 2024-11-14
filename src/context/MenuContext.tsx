import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  showMenu: boolean;
  toogleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuContextProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toogleMenu = () => setShowMenu((prev) => !prev);

  return <MenuContext.Provider value={{ showMenu, toogleMenu }}>{children}</MenuContext.Provider>;
};

export const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within an MenuContextProvider");
  }
  return context;
};
