<?php
include "config.php";

http_response_code(200);

$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string(
  $conn,
  password_hash($_POST['password'], PASSWORD_BCRYPT)
);
$role = mysqli_real_escape_string($conn, empty($_POST['role'])?'user':$_POST['role']);
if (!empty($name) &&
  !empty($email) &&
  !empty($password) &&
  !empty($role)) {

  $query = "INSERT INTO User VALUES('$name','$email', '$password','$role')";
  if (mysqli_query($conn, $query)) {

    $responseData = [
      'status' => 'success',
      'registered' => true,
      'message' => 'Request processed successfully',
      'data' => "User successfully Registered",
    ];
    echo json_encode($responseData);
  } else {
    $responseData = [
      'status' => 'success',
      'registered' => false,
      'message' => 'Request processed successfully',
      'data' => mysqli_errno($conn),
    ];
    echo json_encode($responseData);
  }
} else {
  $responseData = [
    'status' => 'success',
    'message' => 'Request processed successfully',
    'error' => "fildes are empty",
  ];
  echo json_encode($responseData);
}

?>