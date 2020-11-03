import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TableData from './TableData';
import User from './User';
import Logo from './Logo';
import FormData from './FormData';
import Home from "./Home";

class App extends Component {
    state = {
        characters: [

        ],
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }


    render() {
        const { characters } = this.state

        return (
            <Container>
                <Row>
                    <Col><Logo /></Col>
                    <Col><User /></Col>
                </Row>
                <Row>
                    <Col>
                        <TableData characterData={characters} removeCharacter={this.removeCharacter} />
                        <FormData handleSubmit={this.handleSubmit} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Home />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App