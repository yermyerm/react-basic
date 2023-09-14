import { FaStar, FaStarHalf } from "react-icons/fa";

function RatingStar({ rating, className, color }) {
  const ratingRound = Math.round(rating) / 2;
  return (
    <span id="star" className={className} style={{ color: color }}>
      {ratingRound % 1 === 0 ? (
        Array(ratingRound).fill(<FaStar />)
      ) : (
        <>
          {Array(Math.floor(ratingRound)).fill(<FaStar />)}
          <FaStarHalf />
        </>
      )}
    </span>
  );
}
export default RatingStar;
