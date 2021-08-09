import { Button } from "bootstrap";
import React,{Component} from "react";
import './App.css';
class App extends Component{
    render(){
        return(
            <div className="Appp"style={{padding:"2px",textAlign:"center",fontSize:"20px",fontStyle:"italic",color:"ivory"}}>
                
                <div style={{padding:"20px"}} >
                    <h2>HOTELS</h2>
                    <h3>PEARLVIEW</h3>
                    <h4>SEASHELLS</h4>
                    <h5>NILA residency</h5>
                    <br></br>
                </div>
                <div style={{padding:"20px"}}>
                    <h2>PRICE</h2>
                    <h3>15000</h3>
                    <h4>8000</h4>
                    <h5>9999</h5>
                    <br></br>
                </div>
                <div style={{padding:"20px"}} >
                    <h2 > Rating</h2>
                    <h3 >5 star</h3>
                    <h4 >3 star</h4>
                    <h6 >4 star</h6>
                </div>
                
                
        </div>
        
        
            );
       }
}
export default App;
