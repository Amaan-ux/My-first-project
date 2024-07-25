<?php

$server = "localhost";
$username ="root";
$password = "";
$dbname = "iiitg";

$con = mysqli_connect($server, $username, $password, $dbname);


if(!$con)
{
    echo " not connected";
}


$firstname=$_POST['first'];
$lastname= $_POST['last'];
$email = $_POST['email'];
$password = $_POST['pass'];

$sql = "INSERT INTO `log`(`first`,`last`,`email`, `pass`) VALUES ('$firstname','$lastname','$email','$password')";


$result = mysqli_query($con , $sql);

if($result)
{
    header("Location: index2.html");
    exit();
}

else
{
    header("Location: signup2.html");
    exit();
}



?>