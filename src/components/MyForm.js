import React, { Component } from 'react'

export class MyForm extends Component {
    constructor(props){
        super(props)
        this.state={
            textValue:'',
            skillValue:'skill not selected'
        }
    }
    changeTextValue=(event)=>{
        this.setState({
            textValue:event.target.value
        })
    }
    changeSkillValue=(event)=>{
        this.setState({
            skillValue:event.target.value
        })
        
     }
     submitted=(event)=>{
        alert("Form is submitted"+`${this.state.textValue} and ${this.state.skillValue}`)
        event.preventDefault();
     }
  render() {
    return (
      <div><form onSubmit={this.submitted}>
        <label>CollegeName</label>
        <input type='text' value={this,changeTextValue}
      
      </form>
      </div>
    )
  }
}

export default MyForm