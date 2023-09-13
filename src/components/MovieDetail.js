import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

function MovieDetail({
  coverImg,
  title,
  summary,
  genres,
  rating,
  year,
  trailer,
}) {
  return (
    <div id="gridDetail">
      <div id="movieCover">
        <img src={coverImg} />
      </div>
      <div id="movieInfo">
        <h1 className="inline">{title}</h1>
        <h2 className="inline">({year})</h2>
        <h2 id="rating">평점 {rating}</h2>
        <ul className="genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary}</p>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer}`}
          title="Official Trailer Youtube"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  trailer: PropTypes.string,
};
export default MovieDetail;
