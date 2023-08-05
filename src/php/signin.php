<?php
include "config.php";

$name = mysqli_real_escape_string($conn,$_POST['name']);
$email = mysqli_real_escape_string($conn,$_POST['email']);
$password = mysqli_real_escape_string($conn, password_hash($_POST['password'],PASSWORD_BCRYPT)); 
$role = mysqli_real_escape_string($conn,$_POST['rol']);



?>