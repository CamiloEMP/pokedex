export interface ResultsPokemons {
  name: string
  url: string
}

export interface ResponsePokemons {
  count: number
  next: string
  previous: null
  results: Array<ResultsPokemons>
}

export interface IPokemon {
  id: number
  sprites: any
  name: string
  order: number
  types: any
}

export interface IListPokemons {
  pokemons: IPokemon[]
}

export interface ITypesPokemon {
  types: [
    {
      slot: number
      type: {
        name: string
        url: string
      }
    }
  ]
}

export interface IStatsPokemon {
  stats: [
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    }
  ]
}
