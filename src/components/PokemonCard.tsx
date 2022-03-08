import { useNavigation } from "@react-navigation/native"

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native"
import { IPokemon } from "../interfaces/PokemonInterfaces"
import { getColorByPokemonType } from "../utils/getColorByPokemonType"

export default function PokemonCard(props: any) {
  const {id, sprites, name, types} : IPokemon = props.pokemon
  const navigation = useNavigation<any>()

  const pokemonColor = getColorByPokemonType(types)
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgColor }

  function goToPokemon () {
    navigation.navigate("Pokemon", {id: id})
  }

  return (
    <TouchableWithoutFeedback onPress={() => goToPokemon()}>
      <View style={styles.card}> 
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.title}>{name}</Text>
            <Image source={{uri: sprites}} style={styles.image}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 125
  },
  spacing: {
    flex: 1,
    padding: 8
  },
  bgColor: {
    flex: 1,
    padding: 6,
    borderRadius: 12
  },
  title: {
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
    color: "#fff"
  },
  image: {
    width: 95,
    height: 95
  }
})