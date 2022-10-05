import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { className, onsearchHandler, placeHolder } = this.props;
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
  }
}

export default SearchBox;
