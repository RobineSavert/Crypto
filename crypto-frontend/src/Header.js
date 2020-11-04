import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import User from './User';
import Logo from './Logo';
import Dashboard from './Dashboard';
import TableData from './TableData';
import FormData from './FormData';

class Header extends Component {
    state = {
        cryptos: [

        ],
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }


    render() {
        // const { characters } = this.state
        const { cryptos } = this.state

        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <Logo />
                    </Col>
                    <Col>
                        <User />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Header