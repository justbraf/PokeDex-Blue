
const StatBar = ({ name, value }) => {
    // Variables:
    //   Base: The base stat value obtained from the PokeAPI.
    //   IV: Individual Value (0-31). You'll need to provide this.
    //   EV: Effort Value (0-252 per stat, max 510 total). You'll need to provide this.
    //   Level: The Pokémon's level (1-100). You'll need to provide this.
    //   Nature: A multiplier based on the Pokémon's nature (1.1 for a beneficial nature, 0.9 for a hindering nature, 1.0 for a neutral nature). You'll need to provide this.
    const calcHP = (baseStat: number, ivHP: number = -1, evHP: number = -1, level: number = -1): number => {
        if (ivHP == -1)
            ivHP = Math.floor(Math.random() * 32)
        if (evHP == -1)
            evHP = Math.floor(Math.random() * 253)
        if (level == -1)
            level = Math.floor(Math.random() * 101)
        return Math.floor(0.01 * (2 * baseStat + ivHP + Math.floor(0.25 * evHP)) * level) + level + 10
    }

    const calcStats = (baseStat: number, ivStat: number = -1, evStat: number = -1, level: number = -1, nature: number = 1.1): number => {
        if (ivStat == -1)
            ivStat = Math.floor(Math.random() * 32)
        if (evStat == -1)
            evStat = Math.floor(Math.random() * 253)
        if (level == -1)
            level = Math.floor(Math.random() * 101)
        return (Math.floor(0.01 * (2 * baseStat + ivStat + Math.floor(0.25 * evStat)) * level) + 5) * nature
    }

    return (
        <div>
            <h1>{name}</h1>
            <progress value={name.toLowerCase() == "hp" ? calcHP(value) : calcStats(value)} max={250}></progress>
        </div>
    )
}

export default StatBar