import React, {Component} from 'react'
import { Navbar } from "react-bootstrap";

const UserData = () => {
    return (
        <Navbar>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Robine Savert</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

class User extends Component{
    render() {
        return (
            <UserData />
        )
    }
}

export default User