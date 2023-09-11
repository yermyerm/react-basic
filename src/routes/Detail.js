import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [suggest, setSuggest] = useState([]);
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details/json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  const getSuggestion = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_suggestions/json?movie_id=${id}`)
    ).json();
    setSuggest(json.data.movies);
    console.log(suggest);
  };
  useEffect(() => {
    getSuggestion();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="theMovie">
          <img src={movie.large_cover_image} />
          <h1>{movie.title_long}</h1>
          <h2>rating: {movie.rating}</h2>
          <p>Genres: {movie.genres}</p>
          <p>{movie.description_full}</p>
          <p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
              title="Official Trailer Youtube"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
          <div id="movieSuggest">
            {suggest.map((movie) => (
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title_long}
                summary={movie.summary}
                genres={movie.genres}
                id={movie.id}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
