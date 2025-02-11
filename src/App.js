// import React from "react";
// function App(){
//   let username="Sathvik";
//   return(
//     <div>
//      <h1>ExcelR</h1>
//       <p>para</p>
//       {username}
//       {100*100}
//     </div>
//   );
// }
// export default App;

// const App=() =>{
//   return(
//     <h1>Arrow functional component</h1>
//   )
// }

// export default App;
// import Navbar from "./components/Navbar"
// import Main from ".
// /components/Main"
// import Sidebar1 from "./components/Sidebar1"
// import Sidebar2 from "./components/Sidebar2"
// import Footer from "./components/Footer"


// function App(){
//   return(
//     <div className="app">
//       <Navbar/>
//       <Main></Main>
//       <div className="side">
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   );
// };
// export default App;
// import React, { Component } from 'react'
// import CBCPropEx1 from "./propexample/CBCPropEx1";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1
//         username="Uday"
//         age={19}
//         hobbies={["playing","Eating","sleeping"]}
//         address={{city:"Hyd",area:"Miyapur"}}
//         isMarried={false}
//         sendFun={function(){alert("Hi Uday")}}
//         />
//       </div>
//     )
//   }
// }
// import React from 'react'
// import CBCStateEX from './stateexamples/CBCStateEX';
// import PropsChildrenex from './propexample/PropsChildrenex'
// import SubChildProps from './propexample/SubChildProps'


//  const App = () => {
//   return (
//     <div>
//       <CBCStateEX/>
//     </div>
//   )
// }

// export default App;
import React from 'react'
import UserEffectEX from './Hooks/UserEffectEX'

export default function App() {
  return (
    <div>
     <UserEffectEX/>
    </div>
  )
}

