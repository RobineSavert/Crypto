import React, { useState } from 'react';
import axios from 'axios';
import {Table, Spinner, Alert, Container} from 'react-bootstrap';

const App = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cryptos, setCryptos] = useState([]);

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Old Price</th>
                </tr>
            </thead>
        );
    };

    const TableBody = (props) => {
        const rows = props.cryptos.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.quantity}</td>
                    <td>{row.price}</td>
                    <td>{row.old_price}</td>
                </tr>
            )
        })

        return <tbody>{rows}</tbody>
    }

    const Table = (props) => {
        const { cryptos } = props;
        return (
            <Container>
                <table>
                    <TableHeader />
                    <TableBody cryptos={cryptos} />
                </table>
            </Container>
        );
    }

    const getData = async () => {
        try {
            const result = await axios.get("http://localhost:1337/api/crypto");
            setIsLoaded(true);
            setCryptos(result.data);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    };

    if (cryptos.length === 0) {
        getData();
    }

    if (error) {
        return (
            <Alert variant={"danger"}>
                {error.message}
            </Alert>
        );
    } else if (!isLoaded) {
        return (
            <Spinner animation="border" />
        );
    } else {
        return (
            <Table cryptos={cryptos} />
        )
    }
};

export default App;
