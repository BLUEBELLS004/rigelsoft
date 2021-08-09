function App1() {
    return (
      <div className="App">
        <p style={{fontStyle:"bold",fontSize:"20px"}}>Contact me</p>
        <div>
          <form action="/action_page.php">
             <label>Name</label>
             <input type="text"id="fname" name="firstname"placeholder="your name.."/>
             <label style={{padding:"6px",color:"black"}}>Email</label>
             <input type ="email"id="email" name="email"placeholder="your email.."/>
             <input type="submit" value="Submit" style={{color:"violet"}}/>  
          </form>
        </div>
      </div>
    );
  }
  
  export default App1;