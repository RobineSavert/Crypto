import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const CryptoActions = () => {
    return (
        <ButtonGroup>
            <Button variant={"primary"}>Buy</Button>
            <Button variant={"default"}>Sell</Button>
        </ButtonGroup>
    )
}

export default CryptoActions;