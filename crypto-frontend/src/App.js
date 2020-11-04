import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import CryptoTable from './components/CryptoTable';
import CryptoChart from './components/CryptoChart';
import BuyForm from './BuyForm';
import SellForm from './SellForm';
import getData from './utils/get-data'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            crypto: {},
            isLoaded: false,
            error: false
        };
    }

    handleSubmit = (quantity) => {
        const newQuantity = this.state.crypto.quantity + parseInt(quantity);
        this.setState({
            crypto: {
                ...this.state.crypto,
                quantity: newQuantity
            }
        })
    };

    async componentDidMount() {
        const crypto = await getData()
        this.setState({
            crypto,
            isLoaded: true
        })
    }

    render() {
        return (
            <Container>
                <Row className="mt-2 mb-5">
                    <Header />
                </Row>
                <Row className="mt-1 mb-3">
                    <Col md={7}>
                        <CryptoTable crypto={this.state.crypto} error={this.state.error} isLoaded={this.state.isLoaded} />
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