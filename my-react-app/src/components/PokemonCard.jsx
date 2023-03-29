import PropTypes from "prop-types";
import styles from './PokemonCard.module.css';

function PokemonCard({ pokemon }) {
    return (
        <div>
            <figure className={styles.card}>
                {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.cardImg} />}

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