import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useMenuContext } from "./context/MenuContext";

const App = () => {
  const { showMenu, toogleMenu } = useMenuContext();

  const clickedOnMainSection = () => {
    if (showMenu) {
      toogleMenu();
    }
  };

  return (
    <>
      <section className="sticky top-0 bg-white dark:bg-black-100 dark:text-white-100 text-gray-500 md:border-b md:border-white-200 md:dark:border-gray-700">
        <Header className="border-b border-gray-200 dark:border-gray-700 md:border-0 px-5 py-2 md: pb-3" />
        <Navigation className="px-5 md:pt-3" />
      </section>

      <main
        onClick={clickedOnMainSection}
        className="bg-lightBackground dark:bg-darkBackground h-[2000px]"
      >
        main section
      </main>
    </>
  );
};

export default App;
