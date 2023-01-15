import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();
    const previousRoute = id.split('-').shift();

    //usememo para memorizar valores y usecallback para memorizar funciones

    const hero = useMemo( () => getHeroById(id), [ id ]) ;

    const navigate = useNavigate()

    const onNavigateBack = () => {
      navigate(`/${previousRoute}`)
    }

    if (!hero) {
        
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img src={`/assets/heroes/${id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
            </div>
            <div className="col-md-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher</b> { hero.publisher}</li>
                    <li className="list-group-item"><b>Firste apperence</b> { hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                
                <button onClick={onNavigateBack} className="btn btn-outline-dark">
                    Regresar
                </button>
            </div>
        </div>
          
    )
}
