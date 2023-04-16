import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./compornent/card-list/card-list.component";
import SearchBox from "./compornent/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

export type MonsterProfile = {
  id: string;
  name: string;
  email: string;
  website: string;
};
const App = () => {
  const pageTitle: string = "Cat Rolodex";

  const [searchfield, setSerchfiled] = useState("");
  const [profiles, setProfiles] = useState<MonsterProfile[] | never[]>([]);
  const [filterProfiles, setFilterProfiles] = useState(profiles);
  const [title, setTitle] = useState(pageTitle);

  // const callfnc = async function () {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   setProfiles(data);
  // };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setProfiles(data));
    const fetchData = async (): Promise<void> => {
      const data = await getData<MonsterProfile[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setProfiles(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchArr = profiles.filter((profile) => {
      const lowerName: string = profile.name.toLowerCase().split(" ").join("");
      return (
        profile.name.toLowerCase().includes(searchfield) ||
        lowerName.includes(searchfield)
      );
    });
    setFilterProfiles(searchArr);
  }, [profiles, searchfield]);

  const onsearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLowerCase();
    setSerchfiled(searchFieldString);
  };

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const titleString = e.target.value;
    if (!titleString) return setTitle(pageTitle);
    setTitle(titleString);
  };

  return (
    <div className="App">
      <h1 className="profile-title">{title}</h1>
      <SearchBox
        className="search-box"
        onsearchHandler={onsearchChange}
        placeHolder="青色の名前を入力してください"
      />
      <br />
      <SearchBox
        className="search-box title-box"
        onsearchHandler={changeTitle}
        placeHolder="タイトルを変えます"
      />
      <CardList searcharr={filterProfiles} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       profiles: [],
//       searchField: "",
//     };
//   }

//   async componentDidMount() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     this.setState(
//       () => ({ profiles: data }),
//       () => console.log(this.state)
//     );
//   }

//   onsearchChange(e) {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => ({ searchField }));
//   }

//   render() {
//     const { profiles, searchField } = this.state;
//     const { onsearchChange } = this;

//     const searchArr = profiles.filter((profile) => {
//       const lowerName = profile.name.toLowerCase().split(" ").join("");
//       return (
//         profile.name.toLowerCase().includes(searchField) ||
//         lowerName.includes(searchField)
//       );
//     });

//     return (
//       <div className="App">
//         <h1 className="profile-title">Cat Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onsearchHandler={onsearchChange.bind(this)}
//           placeHolder="青色の名前を入力してください"
//         />
//         <CardList searcharr={searchArr} />
//       </div>
//     );
//   }
// }

export default App;
