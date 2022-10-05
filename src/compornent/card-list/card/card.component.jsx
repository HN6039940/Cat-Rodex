import "./card.style.css";

const Card = (props) => {
  const { id, name, email, website } = props.profile;

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
};

export default Card;
