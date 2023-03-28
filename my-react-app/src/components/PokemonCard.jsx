import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}
export default PokemonCard;