import React, { Component } from 'react';
import { Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaBitcoin } from 'react-icons/all';

class BuyForm extends Component {
    initialState = {
        quantity: ""
    };

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { quantity } = this.state;

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
                            value={quantity}
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="mb-2" onClick={this.submitForm}>
                        Buy now
                    </Button>
                </Col>
            </Form.Row>
        );
    }
}

export default BuyForm;
