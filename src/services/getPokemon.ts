import { API_URL } from "../api/config"

export function getPokemon(id : string) : Promise<{}> {
  return (
    fetch(`${API_URL}/pokemon/${id}`)
      .then(res => res.json())
    )
}