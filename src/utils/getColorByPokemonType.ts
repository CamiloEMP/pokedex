import { POKEMON_TYPE_COLORS } from "./constants"

export const getColorByPokemonType = (type: string): string =>
  POKEMON_TYPE_COLORS[type.toLowerCase()]
