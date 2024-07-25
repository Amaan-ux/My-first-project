<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "iiitg";

// Create connection
$con = mysqli_connect($server, $username, $password, $dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['iiitg']))
{
        
    // Get form data
    $firstname = $_POST['first'];
    $lastname = $_POST['last'];
    $email = $_POST['email'];
    $password = $_POST['pass'];


    // Check if email already exists
    $checkEmailSql = "SELECT email FROM 'log' WHERE email = '$email'";
    $checkmail_run = mysqli_query($con,$checkEmailSql);

    if (mysqli_num_rows($checkmail_run) > 0) {
        // Email already exists, redirect to signup page with an error message
        header("Location: signup2.html?error=email_exists");
        exit();
    } else {
        
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
    }

    // Close the statement and connection
    $stmt->close();
    $con->close();
}
?>


