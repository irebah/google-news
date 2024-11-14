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
        className="bg-lightBackground dark:bg-darkBackground mt-5 max-w-6xl mx-auto"
      >
        <section className="">
          <h1 className="text-3xl mb-2">Your briefing</h1>
          <p className="mb-5 text-sm text-gray-600">{getDate()}</p>
          <div className="flex w-full gap-5">
            <Card title="Top stories" id="topStories" className="rounded-2xl w-2/3" />
            <div className="flex flex-col gap-5 w-1/3">
              <Card title="Local News" id="localNews" className="rounded-2xl" />
              <Card title="Picks for you" id="picksForYou" className="rounded-2xl" />
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-3xl mb-2">For you</h1>
          <p className="mb-5 text-sm text-gray-600">Recommended based on your interests</p>
          <div>
            <Card title="Top stories" id="topStories" className="rounded-2xl" />
            <div>
              <Card title="Local News" id="topStories" className="rounded-2xl" />
              <Card title="Picks for you" id="topStories" className="rounded-2xl" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
