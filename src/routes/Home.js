import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../styles/Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&page=${page}`
      )
    ).json();
    setMovies((prev) => [...prev, ...json.data.movies]);
    setLoading(false);
  };

  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.5,
    };

    const scrollMovies = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Intersection detected");
        setPage((prev) => prev + 1);
      }
    }, options);

    const targetElement = document.querySelector("#scrollArea");
    scrollMovies.observe(targetElement);

    getMovies();
  }, [page]);

  return (
    <div>
      <h1 id="appTitle">THE MOVIE</h1>
      {loading ? (
        <h2 id="loading">Loading...</h2>
      ) : (
        <div id="gridHome">
          {movies.map((movie) => (
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
      )}
      <div id="scrollArea">
        <p>loading...</p>
      </div>
    </div>
  );
}

export default Home;
