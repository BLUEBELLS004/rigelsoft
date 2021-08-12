<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$request= file_get_contents("php://input");
$data= json_decode($request);
$username=$data->username;
$password=$data->password;


$con= new mysqli("localhost","root","","youtube")or die ("error1");
$query="INSERT INTO account(username,password)values('$username','$password')";
$res= $con->query($query);
if ($res){
           echo "good";

}
else{
   
    echo "error2";
}
?>