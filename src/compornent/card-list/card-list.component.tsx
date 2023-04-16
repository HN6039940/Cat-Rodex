import Card from "./card/card.component";
import "./card-list.style.css";
import { MonsterProfile } from "../../App";

type CardListProps = {
  searcharr: MonsterProfile[];
};

const CardList = ({ searcharr }: CardListProps) => {
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
