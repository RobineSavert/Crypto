import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import User from './User';
import Logo from './Logo';

class Header extends Component {
    render() {

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
                <hr />
            </Container>
        )
    }
}

export default Header