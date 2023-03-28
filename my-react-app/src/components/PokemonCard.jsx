

function PokemonCard({ pokemon }) {
    return (
        <div>
            <figure>
                {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name} />}

                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </div>
    )
}

export default PokemonCard;