import { API_URL } from "../api/config";
import { ResponsePokemons } from "../interfaces/PokemonInterfaces";

export function getAllPokemons (endpoint : string) : Promise<ResponsePokemons> {
  const url = `${API_URL}/pokemon?limit=20&offset=0`
  return (
    fetch(endpoint || url)
      .then(res => res.json())
      .catch(err => console.log(err))
  )
}
