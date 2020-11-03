import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaTrash } from "react-icons/all";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><Button variant={"danger"} onClick={() => props.removeCharacter(index)}><FaTrash /> Delete</Button></td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

const TableData = (props) => {
    const {characterData, removeCharacter} = props

    return (
        <Table striped bordered hover>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </Table>
    )
}

export default TableData