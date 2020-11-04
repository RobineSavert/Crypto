import React from 'react';
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

const TableBody = ({ crypto = {} }) => (
    <tbody>
        <tr>
            <td>{crypto.name}</td>
            <td>{crypto.quantity}</td>
            <td>{crypto.price}</td>
            <td>{crypto.old_price}</td>
        </tr>
    </tbody>
);

const TableComponent = ({ crypto = {} }) => (
    <Container>
        <Table bordered striped>
            <TableHeader />
            <TableBody crypto={crypto} />
        </Table>
    </Container>
);

const CryptoTable = ({ error, crypto, isLoaded }) => {
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

    return <TableComponent crypto={crypto} />
};
export default CryptoTable;
