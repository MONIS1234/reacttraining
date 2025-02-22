import React from 'react'
import './myStyles.css'
function FunctionalComponents(props) {
    let applyStyle=props.apply ? 'heading' : ''
    console.log(props)
    let inlineStyle={
        color:'red',
        fontSize:'100px'
    }
  return (
    <div>
        <h1 class={`${applyStyle} font-style`}>
            welcome to react class at {props.clgname}
        </h1>
        <h2 style={inlineStyle}>Good morning !!!!</h2>
    </div>
  )
}
export default FunctionalComponents;
