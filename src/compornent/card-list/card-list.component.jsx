import Card from "./card/card.component";
import "./card-list.style.css";

const CardList = (props) => {
  const { searcharr } = props;
  return (
    <div className="card-wrap">
      <div className="grid">
        {searcharr.map((profile) => (
          <Card profile={profile} key={profile.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
