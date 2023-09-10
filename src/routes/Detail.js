import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details/json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
}

export default Detail;
