import React, { useState } from 'react';
import axios from 'axios';
import {Table, Spinner, Alert, Button} from 'react-bootstrap';
import CryptoActions from "./CryptoActions";

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
            <div className="col">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Old price</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {cryptos.map(crypto => <div>{crypto.name}</div>)}</td>
                            <td> {cryptos.map(crypto => <div>{crypto.price}</div>)}</td>
                            <td> {cryptos.map(crypto => <div>{crypto.old_price}</div>)}</td>
                            <td> <CryptoActions /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default App;