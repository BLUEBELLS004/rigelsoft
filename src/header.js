import React from "react";
import './App.css';
class Head extends React.Component{
    render() { 
     return React.createElement("div",
    {style:{color:"#000099",backgroundColor:"ivory"},
     className:"message-box"},
    React.createElement("h1",null,"Welcome to GOds own country ", "\n"," KERALA"),this.props.name);
    }
}
export default Head;