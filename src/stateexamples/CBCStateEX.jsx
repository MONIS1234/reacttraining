import React, { Component } from 'react'

class CBCStateEX extends Component {
    constructor(){
        super();
        this.state={
            university:"MRU"
        };
    }
    ChangeName=()=>{
        this.setState({university:"Mallareddy university"});
    }
  render() {
    console.log(this);
    return (
      <div>CBCStateEX
        <h1>{this.state.university}</h1>
        <button onClick={this.ChangeName}>Change name</button>
      </div>
    )
  }
}
export default CBCStateEX;
