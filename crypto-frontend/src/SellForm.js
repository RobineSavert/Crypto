import React, { Component } from 'react';
import { Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaBitcoin } from 'react-icons/all';

class SellForm extends Component {
    render() {
        return (
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Quantity
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FaBitcoin />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Quantity"
                            type="number"
                            name="quantity"
                            id="quantity"
                            required
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button disabled type="button" variant={"secondary"} className="mb-2">
                        Sell
                    </Button>
                </Col>
            </Form.Row>
        );
    }
}

export default SellForm;
