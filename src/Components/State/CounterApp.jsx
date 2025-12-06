import React, { Component } from 'react'

export default class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {count:0}
        this.increment = this.increment.bind(this);

    }

    increment(){
        this.setState({
            count: this.state.count + 1 
        })
    }

  render() {
    return (
      <div>
      <div className="p-3">
        <h1>Counter: {this.state.count}</h1>
      </div>
      <div className="flex gap-2">
        <button className="bg-amber-200 p-2  rounded-md" onClick={this.increment}>
          Increment
        </button>
      </div>
    </div>
    )
  }
}
