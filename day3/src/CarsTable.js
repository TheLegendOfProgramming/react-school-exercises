import React from 'react'

function CarRow(props) {
    return <td>{props.make} {props.model} from {props.year}</td>
}

function CarsTable(props) {
    const cars = props.cars;
    const listItems = cars.map((car) => <table>
        <tbody>
            <CarRow key={car.id} make={car.make} model={car.model} year={car.year}/>
        </tbody>
    </table>);
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default CarsTable