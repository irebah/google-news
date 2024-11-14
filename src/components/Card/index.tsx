import { FaChevronRight } from "react-icons/fa";
import { News } from "../../types";
import NewsBlock from "./NewsBlock";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  id: string;
  className?: string;
  titleClass?: string;
  imageSize?: string;
}

const Card = ({ title, id, className = "", titleClass = "", imageSize = "" }: CardProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Array<News>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/mockData/data-${id}.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: Array<News> = await response.json();
        setData(result);
        setLoading(false);
      } catch (e) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section className={`${className} bg-white dark:bg-black-100 p-5 w-full`}>
      <div className="flex items-center gap-2 text-blue-600 dark:text-lightBackground">
        <p className="text-xl">{title}</p>
        <FaChevronRight className="" />
      </div>
      {data.map((mainNews) => (
        <Fragment key={`${id}-${mainNews.id}`}>
          <hr className="mt-4 dark:border-darkBackground-2" />
          <section className="sm:flex gap-5 mt-4">
            <NewsBlock
              news={mainNews}
              isFeatured
              isSingle={!mainNews.secondary}
              className={`${mainNews.secondary ? "w-full lg:w-2/5" : "w-full"}`}
              titleClass={titleClass}
              imageSize={imageSize}
            />

            {mainNews.secondary && (
              <aside className="flex gap-1 sm:block w-full overflow-y-auto mt-5 sm:mt-0 lg:w-3/5 rounded-xl sm:rounded-none">
                {mainNews.secondary.map((secondaryNews) => (
                  <NewsBlock
                    className="min-w-[20rem] sm:min-w-0 sm:mb-4 sm:last:mb-0 p-4 sm:p-0"
                    key={`${id}-${mainNews.id}-${secondaryNews.id}`}
                    news={secondaryNews}
                  />
                ))}
              </aside>
            )}
          </section>
        </Fragment>
      ))}
    </section>
  );
};

export default Card;
