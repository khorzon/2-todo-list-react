import React, {Component} from 'react';

class InputForm extends Component{

    constructor(){
        super()
        this.jobValue = React.createRef();
    }


    addJobValue = (e) => {
        e.preventDefault();
        this.props.job(this.jobValue.value);
        this.jobValue.current.value ='';
    }


    render(){
        return(
            <div className="input-form">

            <form onSubmit={this.addJobValue}>
            
            <input type="text" ref={this.jobValue} value={this.jobValue.value}/>
            <input type="submit" value="Add a Job"/>
            
            </form>

            </div>
        )
    }
}

export default InputForm