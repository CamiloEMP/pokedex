import { IPokemon } from "../interfaces/PokemonInterfaces";

export function getPokemonByUrl (url : string) : Promise<IPokemon> {
  return (
    fetch(url).then(res => res.json())
      .catch(err => console.log(err))
  )
}