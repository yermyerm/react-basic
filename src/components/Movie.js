import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/Movie.css";
import { useState } from "react";
import RatingStar from "../components/RatingStar";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
`;

function Movie({ id, coverImg, title, summary, genres, rating }) {
  const [hover, setHover] = useState(0);
  return (
    <div
      id="gridMovie"
      onMouseOver={() => setHover(1)}
      onMouseOut={() => setHover(0)}
      style={hover ? { left: "-25px" } : null}
    >
      <Link to={`/movie/${id}`}>
        <img id="cover" src={coverImg} width={hover ? "300px" : "250px"} />
      </Link>
      <div id="description">
        <h2 id="title" className="inline-block">
          <StyledLink to={`/movie/${id}`}>{title}</StyledLink>
        </h2>
        {hover ? (
          <RatingStar className="inline-block" color="white" rating={rating} />
        ) : null}
        {hover ? (
          <ul id="genres">
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        ) : null}
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
