import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/Movie.css";
import { FaStar } from "react-icons/fa";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 900;
`;

function Movie({ id, coverImg, title, summary, genres, rating }) {
  return (
    <div id="gridMovie">
      <img className="cover" src={coverImg} />
      <div className="description">
        <h2 className="title">
          <StyledLink to={`/movie/${id}`}>{title}</StyledLink>
        </h2>
        <ul className="genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className="summary">{summary}</p>
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
  rating: PropTypes.number.isRequired,
};
export default Movie;
