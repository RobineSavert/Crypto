import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import CryptoTable from './components/CryptoTable';
import CryptoChart from './components/CryptoChart';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

class App extends Component {
    handleSubmit = (crypto) => {
        this.setState({ cryptos: [...this.state.cryptos, crypto] });
    };

    render() {
        return (
            <Container>
                <Row className="mt-2 mb-5">
                    <Header />
                </Row>
                <Row className="mt-1 mb-3">
                    <Col md={7}>
                        <CryptoTable />
                    </Col>
                    <Col>
                        <CryptoChart />
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col className="text-center">
                        <hr/>
                        <Row>
                            <Col md={6}>
                                <BuyForm handleSubmit={this.handleSubmit} />
                            </Col>
                            <Col md={6}>
                                <SellForm handleSubmit={this.handleSubmit} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App