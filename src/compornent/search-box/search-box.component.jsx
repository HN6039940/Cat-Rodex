import "./search-box.style.css";

const SearchBox = (props) => {
  const { className, placeHolder, onsearchHandler } = props;
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
