import { useGetPokemonByNameQuery } from "./pokemonSlice";
import { QueryStatus } from "@reduxjs/toolkit/query";

export function Pokemon({name}:{name: string}) {
  const { data, status } = useGetPokemonByNameQuery(name);
  if(status !== QueryStatus.fulfilled) {
    return <p>query status {status}</p>;
  }
  if(!data) {
    throw new Error(`Expected data, got ${data}`);
  }
  return <div  style={{ margin: "1rem" }}>
    {/* <pre>{JSON.stringify(pokemon)}</pre> */}
    <h2>{name}</h2>
    <img
      src={data.sprites.other.dream_world.front_default}
      alt={data.name}
    />
  </div>
}
