import { useState, useEffect } from "react"
import { ScrollView } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import Header from "../components/Pokemon/Header"
import Stats from "../components/Pokemon/Stats"
import Type from "../components/Pokemon/Type"
import { getPokemon } from "../services/getPokemon"

export default function Pokemon({ route: { params }, navigation }: any) {
  const [pokemon, setPokemon] = useState<any>()
  useEffect(() => {
    getPokemon(params.id)
      .then(data => setPokemon(data))
      .catch(err => {
        console.log(err)
        navigation.goBack()
      })
  }, [params])
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () =>(
        <Icon 
          name="arrow-left"
          color="#fff"
          size={20}
          style={{marginLeft: 5}}
          onPress={() => console.log('atras')}/>
      )
    })
  }, [navigation, params])

  return (
    <>
      <ScrollView>
        <Header
          name={pokemon?.name}
          type={pokemon?.types[0].type.name}
          image={pokemon?.sprites.other["official-artwork"].front_default}
        />
        <Type types={pokemon?.types} />
        <Stats stats={pokemon?.stats} />
      </ScrollView>
    </>
  )
}
