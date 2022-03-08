import { FlatList, ActivityIndicator, StyleSheet } from "react-native"
import { IListPokemons, IPokemon } from "../interfaces/PokemonInterfaces"
import PokemonCard from "./PokemonCard"

export default function PokemonList({
  pokemons,
  loadPokemons,
  isNext
}: IListPokemons) {

  const loadMorePokemons = () => {
    loadPokemons()
  }

  return (
    <FlatList
      contentContainerStyle={{ padding: 6 }}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }: any) => <PokemonCard pokemon={item} />}
      onEndReached={isNext && loadMorePokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            color={"#e48212"}
            size="large"
            style={styles.spinner}
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: 40
  }
})
