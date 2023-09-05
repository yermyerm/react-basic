import PropTypes from "prop-types";
function Movie({ coverImg, title, summary, genres, year }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        {title}({year})
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  coverImg: PropTypes.img.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number.isRequired,
};
export default Movie;
