import { Component } from "react";
import CardList from "./compornent/card-list/card-list.component";
import SearchBox from "./compornent/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState(
      () => ({ profiles: data }),
      () => console.log(this.state)
    );
  }

  onsearchChange(e) {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  }

  render() {
    const { profiles, searchField } = this.state;
    const { onsearchChange } = this;

    const searchArr = profiles.filter((profile) => {
      const lowerName = profile.name.toLowerCase().split(" ").join("");
      return (
        profile.name.toLowerCase().includes(searchField) ||
        lowerName.includes(searchField)
      );
    });

    return (
      <div className="App">
        <h1 className="profile-title">Cat Rolodex</h1>
        <SearchBox
          className="search-box"
          onsearchHandler={onsearchChange.bind(this)}
          placeHolder="青色の名前を入力してください"
        />
        <CardList searcharr={searchArr} />
      </div>
    );
  }
}

export default App;
