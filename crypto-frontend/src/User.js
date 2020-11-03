import React, {Component} from 'react'

const UserData = () => {
    return (
        <div>
            <p>Username</p>
        </div>
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