import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import User from './User';
import Logo from './Logo';
import Dashboard from './Dashboard';
import Header from './Header';
import TableData from './TableData';
import FormData from './FormData';

class App extends Component {
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
                    <Header />
                </Row>
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <TableData characterData={characters} removeCharacter={this.removeCharacter} />*/}
                {/*        <FormData handleSubmit={this.handleSubmit} />*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row>
                    <Col>
                        <Dashboard />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App