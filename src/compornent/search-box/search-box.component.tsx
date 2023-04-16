import { ChangeEventHandler, ChangeEvent } from "react";
import "./search-box.style.css";

// interface ISearchBoxProps {
//   className?: string;
//   placeHolder?: string;
// }

// interface ISearchBoxProps {
//   onsearchHandler: ChangeEventHandler<HTMLInputElement>;
// }

type ISearchBoxProps = {
  className?: string;
  placeHolder?: string;
  onsearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
// const name: string = "test";
// const fnc: (a: string, b: string) => boolean = (a, b) => a === b;
// interface geneA<T> {
//   action: T;
// }

// const ag: geneA<string> = { action: "a" };

const SearchBox = ({
  className,
  placeHolder,
  onsearchHandler,
}: ISearchBoxProps) => {
  return (
    <div>
      <input
        className={`profile-search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onsearchHandler}
      />
    </div>
  );
};

export default SearchBox;
