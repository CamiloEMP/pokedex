import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { getColorByPokemonType } from "../../utils/getColorByPokemonType"

interface Header {
  name: string
  image: string
  type: string
}

export default function Header({ name, image, type = "" }: Header): any {
  const color = getColorByPokemonType(type)
  const bgStyle = [{ backgroundColor: color, ...styles.bg }]
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }]
  },
  content: {
    marginHorizontal: 25,
    marginTop: 30
  },
  title: {
    textTransform: "capitalize",
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    paddingLeft: 20,
    marginTop: 15
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  image: {
    width: 250,
    height: 320,
    resizeMode: "contain",
    marginLeft: 25
  }
})
