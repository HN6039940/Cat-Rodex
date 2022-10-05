import { Component } from "react";
import Card from "./card/card.component";
import "./card-list.style.css";

class CardList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("render");
    const { searcharr } = this.props;
    return (
      <div className="card-wrap">
        <div className="grid">
          {searcharr.map((profile) => (
            <Card profile={profile}></Card>
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
