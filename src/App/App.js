import React, { Component } from 'react';
import './App.css';
import InputForm from '../InputForm/InputForm'
import TodoList from '../TodoList/TodoList'
import ControlInputs from '../ControlInputs/ControlInputs'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todolist: []
    }
  }

  addJob = (jobToAdd) => {

    this.setState((prevState) => {
      return ({
        todolist: [
          ...prevState.todolist, {
            key: Date.now(),
            job: jobToAdd
          }
        ]
      })
    })
  }

  deleteJob = (jobToDelete) => {
    this.setState((prevState) => {
      let newStateArray = prevState.todolist;
      this.state.todolist.map((elem, index) => {
        if (jobToDelete === elem.key) {
          newStateArray.splice(index, 1)
        }
      })
      return ({
        todolist: newStateArray
      })

    })
  }
  sortByDatefunction = () =>{
    let arrayToSort = this.state.todolist;

    for (let i = 0; i < arrayToSort.length - 1; i++) {
      for (let j = 0; j < arrayToSort.length - i; j++) {

        console.log(arrayToSort[i]['key']);
        console.log(arrayToSort[j]['key']);
        

          if (arrayToSort[j]['key'] > arrayToSort[j+1]['key']) {

              console.log('leci');
              
              /* let temp = insArray[j];
              insArray[j] = insArray[j + 1];
              insArray[j + 1] = temp; */

          }
      }
  }



    
  }
  render() {
    return (
      <div className="App">
        <header>
          <h2>Todo List App</h2>
        </header>
        <div className="list-controls">
          
      {/*   <ControlInputs sortDate={this.sortByDatefunction}/> */}
        </div>

        <div className="input-form">

          <InputForm job={this.addJob} />

        </div>

        <div className="list-items">

          <TodoList delJob={this.deleteJob} list={this.state.todolist} />

        </div>



      </div>
    );
  }
}
export default App;
