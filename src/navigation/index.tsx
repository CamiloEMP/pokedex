import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from "react-native"

import AccountScreen from "../screens/Account"
import FavoriteScreen from "../screens/Favorite"
import PokedexNavigation from "./PokedexNavigation"

const Tab = createBottomTabNavigator()
export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="PokedexScreen"
      screenOptions={() => ({
        headerShown: false,
        headerStatusBarHeight: 15,
        headerTitleContainerStyle: {paddingTop: 10},
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 16, fontWeight: "bold"},
        tabBarStyle: {height: 60, paddingBottom: 13},
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name='Account' component={AccountScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Icon name='user' color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="PokedexScreen" component={PokedexNavigation} options={{
        tabBarIcon: () => renderPokeball(),
      }}/>
      <Tab.Screen name='Favorites' component={FavoriteScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Icon name='heart' color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}

function renderPokeball () {
  return (
    <Image 
      source={require('../assets/pokeball.png')} 
      style={{ width: 50, height: 50, top: -12 }}
    />
  )
}