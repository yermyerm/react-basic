import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState("");
  const moneyInput = (event) => setMoney(event.target.value);
  const onSelect = (event) => {
    setSelectedCoin(event.target.selectedIndex);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?optionmit=50")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? "Loading..." : <h2>Money Calculator</h2>}
      <input onChange={moneyInput} value={money} type="number" /> USD is{" "}
      {money / coins[selectedCoin].quotes.USD.price}{" "}
      {coins[selectedCoin].symbol}
      <select onChange={onSelect}>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
