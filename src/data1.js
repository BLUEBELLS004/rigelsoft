import React from'react';
import './App.css';

function Data1() {
  return (
    <div className="Data1">
      <header className="data-header1">
        <h1 style={{fontFamily:"cursive",
                fontStretch:"expanded",
                textAlign:'center'
        }}>
          Places to visit in Kerala
        </h1>
        <div className="p"style={{display:"flex",
        flexDirection:"row",
        gap:"225px"}}>
        <div style={{fontFamily:"cursive"}}>
          <h1>Thrissur</h1>
         <li> Vadakunnathan  temple <br></br></li>
         <li> catholic BAslica<br></br></li>
         <li> guruvayoor temple <br></br></li>
        
        </div>
        <div style={{fontFamily:"cursive"}}>
          <h1>Thiruvanathapuram</h1>
         <li> padnabaswami temple <br></br></li>
         <li> thakkla palace<br></br></li>
         <li> doll museum<br></br></li>
        
        </div>
        <div style={{fontFamily:"cursive"}}>
          <h1>Alappuzha</h1>
         <li> backwaters <br></br></li>
         <li> fishing<br></br></li>
         <li> Pathiramanal island <br></br></li>
        <br></br>
        </div>
        </div>
        </header>  
      <br></br>
      </div>
  );
}


export default Data1;

