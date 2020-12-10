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

    handleSubmitBuy = (quantity, wallet) => {
        const newQuantity = this.state.crypto.quantity + parseInt(quantity);
        const newWallet = this.state.crypto.wallet + parseInt(wallet);
        this.setState({
            crypto: {
                ...this.state.crypto,
                quantity: newQuantity,
                wallet: newWallet
            }
        })
    };

    handleSubmitSell = (quantity, wallet) => {
        const newQuantity = this.state.crypto.quantity - parseInt(quantity);
        const newWallet = this.state.crypto.wallet - parseInt(wallet);
        this.setState({
            crypto: {
                ...this.state.crypto,
                quantity: newQuantity,
                wallet: newWallet
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
        const hasCryptoData = Object.keys(this.state.crypto).length;

        return (
            <Container>
                <Row className="mt-2 mb-5">
                    <Header/>
                </Row>
                <Row className="mt-1 mb-3">
                    <Col md={7}>
                        <CryptoTable crypto={this.state.crypto} error={this.state.error}
                                     isLoaded={this.state.isLoaded}/>
                    </Col>
                    <Col>
                        {hasCryptoData &&
                        <CryptoChart crypto={this.state.crypto}/>
                        }
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col className="text-center">
                        <hr/>
                        <Row>
                            <Col md={6}>
                                <BuyForm handleSubmit={this.handleSubmitBuy}/>
                            </Col>
                            <Col md={6}>
                                <SellForm handleSubmit={this.handleSubmitSell}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App