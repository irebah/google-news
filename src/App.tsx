import Card from "./components/Card";
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

  const getDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
    };

    const formattedDate = new Date().toLocaleDateString("en-NZ", options);

    return formattedDate.replace(/(\w+,\s\d{2}\s\w+)/, "$1");
  };

  return (
    <>
      <section className="sticky top-0 bg-white dark:bg-black-100 dark:text-white-100 text-gray-500 md:border-b md:border-white-200 md:dark:border-gray-700">
        <Header className="border-b border-gray-200 dark:border-gray-700 md:border-0 px-5 py-2 md: pb-3" />
        <Navigation className="px-5 md:pt-3" />
      </section>

      <main
        onClick={clickedOnMainSection}
        className="bg-lightBackground dark:bg-darkBackground dark:text-lightBackground mt-0 lg:mt-5 xl:max-w-6xl xl:mx-auto lg:mx-5"
      >
        <section>
          <h1 className="hidden lg:block text-3xl mb-2">Your briefing</h1>
          <p className="hidden lg:block mb-5 text-sm text-gray-600 dark:text-gray-300">
            {getDate()}
          </p>
          <div className="lg:flex w-full gap-5">
            <Card title="Top stories" id="topStories" className="lg:rounded-2xl lg:w-4/6" />
            <div className="lg:flex flex-col gap-5 lg:w-2/6">
              <Card
                title="Local News"
                id="localNews"
                className="mt-2 lg:mt-0 lg:rounded-2xl"
                titleClass="text-sm"
                imageSize="size-[4rem]"
              />
              <Card
                title="Picks for you"
                id="picksForYou"
                className="mt-2 lg:mt-0 lg:rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* <section>
          <h1 className="text-3xl mb-2">For you</h1>
          <p className="mb-5 text-sm text-gray-600">Recommended based on your interests</p>
          <div>
            <Card title="Top stories" id="a" className="rounded-2xl" />
            <div>
              <Card title="Local News" id="b" className="rounded-2xl" />
              <Card title="Picks for you" id="c" className="rounded-2xl" />
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default App;
