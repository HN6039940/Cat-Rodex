import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { id, name, email, website } = this.props.profile;

    return (
      <div className="card-container">
        <h1 className="profile-name" key={id}>
          {name}
        </h1>
        <img
          className="profile-image"
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
          alt={name}
        />
        <p className="profile-email">{email}</p>
        <p className="profile-website">{website}</p>
      </div>
    );
  }
}

export default Card;
