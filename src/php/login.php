<?php
include 'config.php';
http_response_code(200);
header('Content-Type: application/json; charset = utf-8');
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$role = mysqli_real_escape_string($conn, $_POST['role']);

if (!empty($email) && !empty($password)) {
  $result = mysqli_query($conn, "SELECT * FROM User WHERE Email='{$email}' AND Role='$role'");
  if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $test = password_verify($password, $row['Password']);
    if ($test) {
      $responseData = [
        'status' => 'success',
        'user' => true,
        'verified' => $test,
        'message' => 'Request processed successfully',
        'data' => json_encode($row),
      ];
      echo json_encode($responseData);
    } else {
      $responseData = [
        'status' => 'success',
        'user' => true,
        'verified' => $test,
        'message' => 'Request processed successfully',
        'data' => json_encode(['message' => 'incorrect password', "pass" => $password])
      ];
      echo json_encode($responseData);
    }
  } else {
    $responseData = [
      'status' => 'success',
      'user' => false,
      'verified' => false,
      'message' => 'Request processed successfully',
      'data' => "User doesn't exist",
    ];
    echo json_encode($responseData);
  }
} else {
  echo "empty fields ";
}
mysqli_close($conn);
?>