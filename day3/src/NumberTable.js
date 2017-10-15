import React from 'react'

function TableItem(props) {
    return <td>{props.value}</td>
}

function NumberTable(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <table>
        <tbody>
            <TableItem key={number.toString()} value={number}/>
        </tbody>
    </table>);
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberTable