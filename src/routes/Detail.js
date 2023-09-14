import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Movie from "../components/Movie";
import styles from "../styles/Detail.css";

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
  }, [movie]);
  const getSuggestion = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_suggestions/json?movie_id=${id}`)
    ).json();
    setSuggest(json.data.movies);
  };
  useEffect(() => {
    getSuggestion();
  }, [movie]);

  return (
    <div>
      {loading ? (
        <h2 id="loading">Loading...</h2>
      ) : (
        <div>
          <MovieDetail
            id={movie.id}
            key={movie.id}
            coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            summary={movie.description_full}
            genres={movie.genres}
            rating={movie.rating}
            trailer={movie.yt_trailer_code}
          />
          <h2>비슷한 영화</h2>
          <div id="movieSuggest">
            {suggest.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title_long}
                summary={movie.summary}
                genres={movie.genres}
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
