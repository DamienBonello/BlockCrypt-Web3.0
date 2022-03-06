import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../hooks/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app gradient-bg-welcome text-white'>
      <div className='coin-search flex justify-center py-5'>
        <h1 className='coin-text py-2 px-5 mr-5'>Search a currency</h1>
        <form>
          <input
            className='coin-input text-black'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <ul className='w-7/12 text-white text-2xl flex-row justify-between items-center flex m-auto py-4 px-2 border-solid border-b-4 border-white'>
        <li>Ticker</li>
        <li>Symbol</li>
        <li>Price</li>
        <li>%Change</li>  
        <li>Market Cap</li>
        <li>Volume</li>
      </ul>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;