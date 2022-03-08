import { useState, useEffect } from "react"
import { getAllPokemons } from "../services/getAllPokemons"
import { getPokemonByUrl } from "../services/getPokemonByUrl"
import { IPokemon } from "../interfaces/PokemonInterfaces"
import PokemonList from "../components/PokemonList"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [nextUrl, setNextUrl] = useState<string>("")

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  async function loadPokemons() {
    try {
      const response = await getAllPokemons(nextUrl)
      setNextUrl(response.next)
      const pokemonsArray: IPokemon[] = []
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonByUrl(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          types: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          sprites: pokemonDetail.sprites.other["official-artwork"].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}
