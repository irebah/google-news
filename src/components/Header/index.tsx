import Avatar from "./Avatar";
import GoogleApps from "./GoogleApps";
import GoogleLogo from "./GoogleLogo";
import HamburgerMenu from "./HamburgerMenu";
import Help from "./Help";
import Search from "./Search";
import Settings from "./Settings";

const Header = () => (
  <header className="bg-white dark:bg-black-100 dark:text-white-100 text-gray-500 flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
    <section className="flex gap-4">
      <HamburgerMenu className="h-7 inline-block md:hidden" />
      <div className="flex gap-1 items-end">
        <GoogleLogo className="h-6 inline-block" filldarkmode="rgb(225,226,227)" />
        <span className="text-xl">News</span>
      </div>
    </section>
    <section className="flex items-center justify-end gap-4 fill-gray-500 dark:fill-white-100 w-full sm:pl-10 pr-4 lg:px-32">
      <Search className="sm:w-full" />
      <Help className="size-7 hidden md:inline-block" />
      <Settings className="size-7 hidden md:inline-block" />
    </section>
    <section className="flex items-center justify-end gap-4 fill-gray-500 dark:fill-white-100 ">
      <GoogleApps className="size-7" />
      <Avatar initial="I" />
    </section>
  </header>
);

export default Header;
