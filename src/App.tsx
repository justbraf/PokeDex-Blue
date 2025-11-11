import { useEffect, useState } from "react"

function App() {
  // declare interface for pokemon data using only the keys desired from the API response
  interface Poke {
    name: string;
    abilities: Array<{
      ability: {
        name: string;
      }
    }>;
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

  return (
    <>
      <p className="text-4xl">Name: {pokemon?.name}</p>
      <p className="text-3xl font-underline">Abilities:</p>
      <ul className="list-disc pl-8">
        {
          pokemon?.abilities.map((skill: unknown) => {
            return <li className="text-2xl">{skill.ability.name}</li>
          })

        }
      </ul>
      <audio controls src={pokemon?.cries.latest}></audio>
    </>
  )
}

export default App
