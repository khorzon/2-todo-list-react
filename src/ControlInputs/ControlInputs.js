import React, { Component } from 'react'

class ControlInputs extends Component {
    constructor(props) {
        super(props)
    }
    sortByDate = this.props.sortDate;

    render() {
        return (
            <div>
                <button onClick={this.sortByDate}>Order ascending by date</button>
                <button>Order ascending by task name</button>
                <button>Display in one Column</button>
            </div>
        )
    }


}

export default ControlInputs