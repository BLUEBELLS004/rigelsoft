import React from'react';


function Click(){
    function sayhi(){
    alert("Thankyou for visiting\nHAppY OnaM\nPlease come again");
    }
    return(
        <button style={{float:"right",
        color:"royal blue",
        backgroundColor:"turquoise",
        fontSize:"20px",borderRadius:"5px",
        boxShadow:"5px 9px #999",
        width:300}} 
        onClick={sayhi}>
            CLICK HERE TO END
        </button>
        );
}
export default Click;