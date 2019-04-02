import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    deleteJob = (key) => {
        setTimeout(() => {
            this.props.delJob(key);
        }, 750);
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <ul>
                    {list.map((elem) => {
                        return (
                            <li key={elem.key}>
                                {elem.job}
                                <input type="checkbox" onChange={() => this.deleteJob(elem.key)} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default TodoList