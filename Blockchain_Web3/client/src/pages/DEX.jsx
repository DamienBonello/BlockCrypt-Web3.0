import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../hooks/Coin';
import { Footer } from '../components';

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
      <div className='coin-app gradient-bg-welcome text-white min-h-screen'>
        <div className='w-full text-3xl text-color:white text-center py-10 font-bold'>
          Top 100 Cryptocurrencies by Market Cap 
        </div>
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
        <div className='mt-10'>
         <Footer/>
        </div>
      </div>
    

  );
}

export default App;