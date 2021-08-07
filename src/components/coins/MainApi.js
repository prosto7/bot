import React, {useState,useEffect} from 'react'
import './Api.css';
import axios from 'axios'
import Coin from './Coin'
import './Coin.css';
import { Table } from 'react-bootstrap';


function MainApi() {
    const [coins,setCoins]= useState([]);   // монеты и функция которая будет обновлять
    const [search,setSearch] = useState('')
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data); //получаем данные о монетах
            
        }).catch(error => alert('Api error'))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())  // функция фильтр
    );
  return (
    <div className="container-fluid coin">
    <div className="container coin__app">
        <div className="coin__search">
            <h1 className="coin__text">Поиск валюты</h1>
            <form>
                <input type="text" placeholder="Поиск" className="coin__input" onChange={handleChange}/>
            </form>
        </div>

        <Table responsive size="sm">
              <thead className="coin__table">
                <tr className="table__header">
                <th><h5>Icon</h5></th>
                <th><h5>Coin</h5></th>
                <th><h5>Ticker</h5></th>
                <th><h5>Price</h5></th>
                <th><h5>Volume</h5></th>
                <th><h5>Changes</h5></th>
                <th><h5>Market Cap</h5></th>
                </tr>
            </thead>
            <tbody>
           
        {filteredCoins.map(coin => {
            return (
              
                <Coin key={coin.id} name={coin.name} image={coin.image} 
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
                />
            
            )
            
        })}
 </tbody>
</Table>
    </div>

    </div>
  );
}

export default MainApi;
