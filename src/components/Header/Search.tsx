import { FaCaretDown } from "react-icons/fa";

interface SearchProps {
  className?: string;
}

const Magnifier = ({ className = "" }: SearchProps) => (
  <svg viewBox="0 0 24 24" className={`${className}`}>
    <path d="m20.49 19-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);

const Search = ({ className = "" }: SearchProps) => (
  <section className={className}>
    <Magnifier className="size-7 sm:hidden" />
    <div className="relative hidden sm:flex sm:items-center">
      <div className="absolute left-4">
        <Magnifier className="size-6" />
      </div>
      <input
        type="text"
        placeholder="Search. for topics, locations & sources"
        className="pl-14 pr-14 py-2 h-12 rounded-lg w-full focus:outline-none bg-lightBackground-2 dark:bg-darkBackground-2"
      />
      <div className="absolute right-4 cursor-pointer">
        <FaCaretDown />
      </div>
    </div>
  </section>
);

export default Search;
