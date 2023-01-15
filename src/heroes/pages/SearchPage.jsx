import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/UseForm";
import { HeroCard } from "../components/index";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0); // devuelve booleano

  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control mb-3"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {q === "" ? (
            <div className="alert alert-success">
              {" "}
              <h4>Results</h4>
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                <h4>
                  No hero with<b>{q}</b>
                </h4>
              </div>
            )
          )} */}
          <div
            className="alert alert-success animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            {" "}
            <h4>Results</h4>
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            <h4>
              No hero with<b>{q}</b>
            </h4>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
