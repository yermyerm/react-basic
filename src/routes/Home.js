import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../styles/Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&with_rt_ratings`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div id="body">
      {loading ? (
        <h1 id="loading">Loading...</h1>
      ) : (
        <div id="gridHome">
          {movies.map((movie) => (
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
      )}
    </div>
  );
}

export default Home;
