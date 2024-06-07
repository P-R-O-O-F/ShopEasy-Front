import { useEffect, useState } from "react";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => {
        return response.json();
      })
      .then((responsePokemons) => {
        setPokemons(responsePokemons);
      })
      .catch(error => setError(error));
    }, []);

    const handleClickPokemon = (event, id) => {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((responsePokemon) => {
            setPokemons(responsePokemon);
        });
    }

  return (
    <section>
      {pokemons ? (
        <div>
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <h1>{pokemon.pokedexId}</h1>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ width: "200px", height: "200px" }}
              />
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    border: "1px solid black",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "lightgrey",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Elements
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {pokemon.apiTypes.map((type) => (
                      <div key={type.name} style={{ margin: "10px", display: "inline"}}>
                        <img
                          src={type.image}
                          alt={type.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                        {type.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    border: "1px solid black",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "lightgrey",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Stats
                  </div>
                  <div style={{ padding: "10px" ,display: "inline"}}>
                    <div>HP: {pokemon.stats.HP}</div>
                    <div>Attack: {pokemon.stats.attack}</div>
                    <div>Defense: {pokemon.stats.defense}</div>
                    <div>Special Attack: {pokemon.stats.special_attack}</div>
                    <div>Special Defense: {pokemon.stats.special_defense}</div>
                    <div>Speed: {pokemon.stats.speed}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="lds-ripple">
          <h1>Loading</h1>
          <div></div>
          <div></div>
        </div>
      )}
    </section>
  );
};

export default Pokemons;
