<?php
// Get form data
include 'config.php';

$name = $_POST['name'];
$email = $_POST['email'];

// Perform any necessary processing with the form data

if ($email) {
  $result = mysqli_query($conn, "SELECT * FROM User WHERE Email='{$email}'");
  if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    /*  echo "name = ".$row['Name']."\n email =".$row['Email']." \npassword = ".$row['Password']." \ntype = ".$row['Role']; */
    echo json_encode($row);
  } else {
    echo "User doesn't exist! ";
  }
}


// Return a response

?>