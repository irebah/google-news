interface CardProps {
  title: string;
  id: string;
  className: string;
}

const data = [
  {
    image: "img1.webp",
    source: {
      icon: "rotorua_daily.webp",
    },
    title: "National hīkoi to descend on Rotorua",
    date: "202024-11-10T20:11:24Z",
    secondary: [
      {
        source: {
          icon: "rnz_icon.png",
          text: "RNZ",
        },
        title: "Live: Parliament sits to debate Treaty Principles Bill",
        date: "202024-11-10T20:11:24Z",
      },
      {
        source: {
          icon: "nzheraldicon.png",
          text: "New Zealand Herald",
        },
        title:
          "Treaty Principles Bill live updates: Government to face grilling ahead of first vote",
        date: "202024-11-10T20:11:24Z",
      },
      {
        source: {
          icon: "thepost.png",
          text: "The Post",
        },
        title: "Christopher Luxon accuses David Seymour of 'not helping' the Government",
        date: "202024-11-10T20:11:24Z",
      },
    ],
  },

  {
    image: "img2.jpeg",
    source: {
      icon: "onenews.webp",
    },
    title: "Trump reveals major cabinet roles for Rubio, Gabbard and Gaetz",
    date: "202024-11-10T20:11:24Z",
    secondary: [
      {
        source: {
          icon: "bbc_icon.png",
          text: "BBC.com",
        },
        title: "Matt Gaetz: Trump's choice for attorney general shocks Washington",
        date: "202024-11-10T20:11:24Z",
      },
      {
        source: {
          icon: "washingtonPost.png",
          text: "The Washington Post",
        },
        title: "Trump picks Gaetz and Gabbard for top jobs, daring Senate GOP to defy him",
        date: "202024-11-10T20:11:24Z",
      },
    ],
  },

  {
    image: "img3.webp",
    source: {
      icon: "nzherald_co_nz.webp",
    },
    title: "'Tragically taken': Police name victims of triple-fatal Hamilton train crash",
    date: "202024-11-10T20:11:24Z",
  },
];

const Card = ({ title, id, className }: CardProps) => {
  return (
    <section className={`${className} bg-white p-5 w-full`}>
      <p className="">{title}</p>
      {data.map((mainNews) => (
        <>
          <hr className="mt-4" />
          <section className="flex gap-5 mt-4">
            <article className={`${mainNews.secondary ? "w-2/5" : "w-full"}`}>
              <img className="rounded-2xl" src={mainNews.image} alt="main image block" />
              <div className="mt-2 flex text-sm gap-1 items-center">
                <img src={mainNews.source.icon} alt="source" />
                {mainNews.source.text && <span>{mainNews.source.text}</span>}
              </div>
              <p className="mt-2 text-lg">{mainNews.title}</p>
              <p className="mt-2 text-xs">{mainNews.date}</p>
            </article>
            {mainNews.secondary && (
              <aside className="w-3/5">
                {mainNews.secondary.map((secondaryNews) => (
                  <article className="mb-3">
                    <div className="flex text-xs gap-1 items-center">
                      <img src={secondaryNews.source.icon} alt="source" className="h-4" />
                      {secondaryNews.source.text && <span>{secondaryNews.source.text}</span>}
                    </div>
                    <p className="mt-2 text-sm">{secondaryNews.title}</p>
                    <p className="mt-2 text-xs">{secondaryNews.date}</p>
                  </article>
                ))}
              </aside>
            )}
          </section>
        </>
      ))}
    </section>
  );
};

export default Card;
