import React, { Component } from 'react';

class InputForm extends Component {

    constructor() {
        super()
        this.jobValue = React.createRef();
    }

    addJobValue = (e) => {
        e.preventDefault();
        this.props.job(this.jobValue.current.value);
        this.jobValue.current.value = '';
    }

    render() {
        return (
            <div className="input-form">
                <form onSubmit={this.addJobValue}>

                    <input type="text" ref={this.jobValue} />
                    <input type="submit" value="Add a Task" />

                </form>
            </div>
        )
    }
}

export default InputForm