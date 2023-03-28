const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)

    }
    const handleClickBack = () => {
        setPokemonIndex(pokemonIndex - 1)

    }
    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={handleClickBack}>Precedent</button> : <p></p>}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : <p></p>}
        </div>)
}

export default NavBar