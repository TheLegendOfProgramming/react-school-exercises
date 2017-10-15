import React, {Component} from 'react';
import NumberList from './NumberList'
import NumberTable from './NumberTable'
import CarsTable from './CarsTable'
import NameForm from './NameForm'
import EssayForm from './EssayForm'
import FlavorForm from './FlavorForm'
import Reservation from './Reservation'
import Calculator from './Calculator'
import StateLift from './StateLift'
import cars from './stores/carStore'

class ListDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numbers: props.numbers
        }
    }

    render() {
        return (
            <div>
                <div>
                    <StateLift/>
                </div>
            </div>
        );
    }
}

export default ListDemo

// <div>
// <NumberList numbers={this.state.numbers}/>
// </div>
// <div>
// <NumberTable numbers={this.state.numbers}/>
// </div>
// <div>
// <CarsTable cars={cars}/>
// </div>
// <div>
// <NameForm/>
// </div>
// <div>
// <EssayForm/>
// </div>
// <div>
// <FlavorForm/>
// </div>
// <div>
// <Reservation/>
// </div>
// <div>
// <Calculator/>
// </div>