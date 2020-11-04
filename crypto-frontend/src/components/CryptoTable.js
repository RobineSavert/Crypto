import React, { useState } from 'react';
import axios from 'axios';
import { Table, Spinner, Alert, Container } from 'react-bootstrap';

const TableHeader = () => (
    <thead>
    <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Old Price</th>
    </tr>
    </thead>
);

const TableBody = ({ cryptos = [] }) => (
    <tbody>{cryptos.map((row, index) => (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.quantity}</td>
            <td>{row.price}</td>
            <td>{row.old_price}</td>
        </tr>
    ))}
    </tbody>
);

const TableComponent = ({ cryptos = [] }) => (
    <Container>
        <Table bordered striped>
            <TableHeader />
            <TableBody cryptos={cryptos} />
        </Table>
    </Container>
);

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
    };

    if (cryptos.length === 0) {
        getData();
    }

    if (error) {
        return (
            <Alert variant={'danger'}>{error.message}</Alert>
        );
    }

    if (!isLoaded) {
        return (
            <Spinner animation="border" />
        );
    }
    return <TableComponent cryptos={cryptos} />
};
export default App;
