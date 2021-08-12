import React ,{Component} from 'react';
import axios from 'axios';

class Form extends Component{
        constructor(props){
        super(props);
        this.state={
        username:" ",
        password:" "
      }
}
inputSet=(e)=>{
    
    this.setState({[e.target.name]:e.target.value})
}
register=(e)=>{
    e.preventDefault();
    var dat={
        username:this.state.username,
        password:this.state.password
    };
  axios.post("http://localhost/rigelsoftphp/api.php",dat).then(response=>{
    if(response.data=="good"){
        alert(" i will contact you through email soon")
    }
    else{
        alert("error")
    }
})
}

render()  
  {
     return(
              <div className="container">
                  <h2>For booking </h2>
                  <form>
                      <div className="form_group">
                          <label>NAME</label>
                          <input type="text" onChange={this.inputSet} name="username" className="form_control"/>
                      </div><div className="form_group">
                          <label>email Address</label>
                          <input type="password"onChange={this.inputSet} name="password" className="form_control"/>
                      </div>
                      <div className="form_group">
                          <button onClick={this.register} className="btn btn-primary">submit</button>
                      </div>
                    
                  </form>
              </div> 
                )
}}
export default Form;
