import { render } from "@testing-library/react";
import React from "react";
class Car extends React.Component{
constructor(){
    super();
    this.state = {color:'Red'}
}
render(){
   return(
     <h1>Hi iam a {this.state.color} car!!</h1>
   )
}
}
export default Car;