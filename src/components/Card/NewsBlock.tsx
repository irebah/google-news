import { News } from "../../types";

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
  imageSize = "",
}: NewsBlockProps) => {
  return (
    <article
      className={`${className} ${isSingle ? "flex justify-between" : ""} ${
        isFeatured ? "" : "bg-lightBackground sm:bg-transparent"
      }`}
    >
      {isFeatured && !isSingle && (
        <img className="rounded-2xl mb-2 w-full" src={news.image} alt="main image block" />
      )}
      <div className="flex flex-col justify-between">
        <div className="">
          <div className={`flex ${isFeatured ? "text-sm" : "text-xs"} gap-1 items-center`}>
            <img src={news.source.icon} alt="source" className="h-[0.875rem]" />
            {news.source.text && <span>{news.source.text}</span>}
          </div>
          <p className={`mt-2 ${isFeatured ? "text-lg" : "text-sm text-gray-600"} ${titleClass}`}>
            {news.title}
          </p>
        </div>
        <p className={`mt-2 text-xs`}>{news.date}</p>
      </div>
      {isFeatured && isSingle && (
        <img
          className={`rounded-2xl w-[6rem] h-[6rem] ml-4 ${imageSize}`}
          src={news.image}
          alt="main image block"
        />
      )}
    </article>
  );
};

export default NewsBlock;
