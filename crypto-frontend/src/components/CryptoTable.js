import React, { useState } from 'react';
import axios from 'axios';
import {Table, Spinner, Alert } from 'react-bootstrap';

const App = () => {

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
                <Alert variant="danger">
                    <p>
                        {error.message}
                    </p>
                </Alert>
            </div>
        );
    } else if (!isLoaded) {
        return (
            <div className="col">
                <Spinner animation="border" />
            </div>
        );
    } else {
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Old price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cryptos.map(crypto => <div key={crypto.name}>{crypto.name}</div>)}</td>
                        <td>{cryptos.map(crypto => <div key={crypto.quantity}>{crypto.quantity}</div>)}</td>
                        <td>{cryptos.map(crypto => <div key={crypto.price}>${crypto.price}</div>)}</td>
                        <td>{cryptos.map(crypto => <div key={crypto.old_price}>${crypto.old_price}</div>)}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default App;