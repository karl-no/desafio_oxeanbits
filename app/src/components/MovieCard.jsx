import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 

import { FaStar } from "react-icons/fa";
import "../pages/Movie.css";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2 className="movie-name">{movie.title}</h2>
      <p className="rating">
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showLink: PropTypes.bool,
};

export default MovieCard;