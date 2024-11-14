import { FaEllipsisV } from "react-icons/fa";
import { News } from "../../types";
import { timeAgo } from "../../utils/timeUtils";

interface NewsBlockProps {
  news: News;
  className?: string;
  isFeatured?: boolean;
  isSingle?: boolean;
  titleClass?: string;
  imageSize?: string;
}

const NewsBlock = ({
  news,
  className,
  isFeatured = false,
  isSingle = false,
  titleClass = "",
  imageSize = "size-[6rem]",
}: NewsBlockProps) => {
  return (
    <article
      className={`${className} dark:text-lightBackground group ${
        isSingle ? "flex justify-between" : ""
      } ${
        isFeatured
          ? ""
          : "bg-lightBackground dark:bg-darkBackground-2 sm:bg-transparent dark:sm:bg-transparent"
      }`}
    >
      {isFeatured && !isSingle && (
        <img className="rounded-2xl mb-2 w-full" src={news.image} alt="main image block" />
      )}
      <div className="flex flex-col justify-between">
        <div className="relative pr-6">
          <div className={`flex ${isFeatured ? "text-sm" : "text-xs"} gap-1 items-center`}>
            <img
              src={news.source.icon}
              alt="source"
              className="h-[0.875rem] dark:bg-lightBackground-2"
            />
            {news.source.text && <span>{news.source.text}</span>}
          </div>
          <a
            href="#"
            rel="norferrer noopener"
            className={`mt-2 hover:underline ${
              isFeatured ? "text-lg" : "text-sm text-gray-600 dark:text-lightBackground-2"
            } ${titleClass}`}
          >
            {news.title}
          </a>
          <div className="cursor-pointer absolute top-0 right-0 hidden group-hover:block hover:bg-lightBackground-2 rounded-full p-1">
            <FaEllipsisV className="size-4" />
          </div>
        </div>
        <p className={`mt-2 text-xs dark:text-gray-400`}>
          {timeAgo(news.date)} {news.autor ? `\u00B7 By ${news.autor}` : ""}
        </p>
      </div>
      {isFeatured && isSingle && (
        <img className={`rounded-2xl ${imageSize}`} src={news.image} alt="main image block" />
      )}
    </article>
  );
};

export default NewsBlock;
