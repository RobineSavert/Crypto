import React, { Component } from 'react';
import { Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaBitcoin } from 'react-icons/all';

class BuyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0
        };
    }

    handleChange = event => {
        const { value } = event.target;

        this.setState({
            quantity: value
        });
    }

    handleClick = () => {
        this.props.handleSubmit(this.state.quantity)
    }

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
                            required
                            value={quantity}
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button type="button" className="mb-2" onClick={this.handleClick}>
                        Buy now
                    </Button>
                </Col>
            </Form.Row>
        );
    }
}

export default BuyForm;
