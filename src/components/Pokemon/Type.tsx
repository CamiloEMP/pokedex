import { View, Text, StyleSheet } from "react-native"
import { ITypesPokemon } from "../../interfaces/PokemonInterfaces"
import { getColorByPokemonType } from "../../utils/getColorByPokemonType"
export default function Type({ types }: ITypesPokemon) {
  const color = (type: string) => getColorByPokemonType(type)

  return (
    <View style={styles.content}>
      {types?.map((item, index) => (
        <View
          key={index}
          style={{ backgroundColor: color(item.type.name), ...styles.pill }}
        >
          <Text style={styles.title}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pill: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderRadius: 12
  },
  title: {
    textTransform: "capitalize",
    fontSize: 14,
    color: "#fff",
    fontWeight: "700"
  }
})
