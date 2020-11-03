import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cryptos, setCryptos] = useState([]);

    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:1337/api/crypto');
            setIsLoaded(true);
            setCryptos(result.data);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    }

    if (cryptos.length === 0) {
        getData();
    }

    if (error) {
        return (
            <div className="col">
                Error: {error.message}
            </div>
        );
    } else if (!isLoaded) {
        return (
            <div className="col">
                Loading...
            </div>
        );
    } else {
        return (
            <div className="col">
                <h1>Coins</h1>
                <p>These are my coins</p>
                {cryptos.map(crypto => <div key={crypto.name}>{crypto.name}</div>)}
                {cryptos.map(crypto => <div key={crypto.id}>{crypto.id}</div>)}
                {cryptos.map(crypto => <div key={crypto.valueold}>{crypto.value_old}</div>)}
                {cryptos.map(crypto => <div key={crypto.valuenew}>{crypto.value_new}</div>)}
            </div>
        );
    }
}

export default Home;