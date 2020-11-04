import React, { Component } from 'react';
import { Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaBitcoin } from 'react-icons/all';

class BuyForm extends Component {
    render() {
        return (
            <Form.Row className="align-items-center" onSubmit={this.onFormSubmit}>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Quantity
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text><FaBitcoin /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Quantity"
                                     type="number"
                                     name="quantity"
                                     id="quantity" />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="mb-2">
                        Buy now
                    </Button>
                </Col>
            </Form.Row>
        );
    }
}

export default BuyForm;