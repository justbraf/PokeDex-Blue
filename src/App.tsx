import { useEffect, useState } from "react"

function App() {
  // declare interface for pokemon data using only the keys desired from the API response
  interface Poke {
    name: string,
    abilities: Array<{
      ability: {
        name: string
      }
    }>
  }
  const [pokemon, setPokemon] = useState<Poke>()

  useEffect(() => {
    const randomInt = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const URL: string = "https://pokeapi.co/api/v2/pokemon/" + randomInt(1, 151)

    fetch(URL)
      .then(response => response.json())
      .then((data: Poke) => setPokemon(data))
  }, [])

  const capName = (name: string): string => {
    return name[0].toUpperCase() + name.slice(1)
  }

  // Variables:
  //   Base: The base stat value obtained from the PokeAPI.
  //   IV: Individual Value (0-31). You'll need to provide this.
  //   EV: Effort Value (0-252 per stat, max 510 total). You'll need to provide this.
  //   Level: The Pokémon's level (1-100). You'll need to provide this.
  //   Nature: A multiplier based on the Pokémon's nature (1.1 for a beneficial nature, 0.9 for a hindering nature, 1.0 for a neutral nature). You'll need to provide this.
  const calcHP = (baseStat: number, ivHP: number, evHP: number, level: number): number => {
    return Math.floor(0.01 * (2 * baseStat + ivHP + Math.floor(0.25 * evHP)) * level) + level + 10
  }

  const calcStats = (baseStat: number, ivStat: number, evStat: number, level: number, nature: number): number => {
    return (Math.floor(0.01 * (2 * baseStat + ivStat + Math.floor(0.25 * evStat)) * level) + 5) * nature
  }

  return (
    <div className="flex flex-col items-center">
      {pokemon ?
        <>
          <p className="text-7xl mb-6">{capName(pokemon.name)}</p>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          <p className="text-3xl font-underline">Abilities:</p>
          <ul className="list-disc pl-8">
            {
              pokemon.abilities.map((skill: { ability }) => {
                return <li className="text-2xl">{capName(skill.ability.name)}</li>
              })

            }
          </ul>

          {
            pokemon.
          }
          <audio controls src={pokemon.cries.latest}></audio>
        </>
        :
        <h1 className="text-9xl">Fetching Data...</h1>
      }
    </div>
  )
}

export default App
