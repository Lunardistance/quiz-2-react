import React, { Component } from 'react';
import './App.css';


function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
}

function CounterTable({count, onAdd, onReset}) {
  return (
  <div className = "countTable">
  <div className = "addButton">
    <Button onClick={() => onAdd(count)}  
    className = "add"
    type="button">
  Add A Person
    </Button>
    </div>
  <div className = "clearButton"> <Button onClick={() => onReset()}  
    className = "add" label = "Clear Headcount">
    Clear Headcount
    </Button></div>
  <div className = "countColumn">{count}</div>
  </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.onAdd = this.onAdd.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onAdd(count){
    const countPlus = count+= 1;

    this.setState({
      count: countPlus
    })
  }

  onReset(){  
    const clearCount = 0

    window.confirm("Are you Sure you Want to Clear your Count?") ? this.setState({count: 0}) : this.setState({count: this.state.count})

  }

  render() {
    return (
      <div className="App">
       <CounterTable count={this.state.count} onAdd={this.onAdd} onReset={this.onReset} />
      </div>
    );
  }
}

export default App;
