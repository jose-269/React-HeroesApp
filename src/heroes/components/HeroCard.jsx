import { Link } from "react-router-dom";

//
const CharactersByHero = ({ alter_ego, characters }) => {
  // esto  es === que const charactersByHero = (<p>{ characters }</p>)
  // if (alter_ego === characters) return (<></>);
  // return <p>{ characters }</p>
  alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  // const charactersByHero = (<p>{ characters }</p>)
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImgUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="car-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* {
                                ( alter_ego !== characters) && charactersByHero
                                ( alter_ego !== characters) && (<p>{ characters }</p>)
                            } */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
