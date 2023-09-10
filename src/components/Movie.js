import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div id="gridMovie">
      <img class="cover" src={coverImg} />
      <div class="description">
        <h2 class="title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <ul class="genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p class="summary">{summary}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
