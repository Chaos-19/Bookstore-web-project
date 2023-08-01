<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="">
  <meta name="author" content="chaos">
  <title>Signup</title>
  <!-- Bootstrap core CSS -->
  <link href="bootstrap.min.css" rel="stylesheet">
  <!-- custom css -->
  <link rel="stylesheet" href="style.css">
  <?php


  if (isset($_POST['submit'])) {

    $user = mysqli_real_escape_string($conn, $_POST['user']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, password_hash($_POST['password'], PASSWORD_BCRYPT));
    $cpassword = mysqli_real_escape_string($conn, $_POST['cpassword']);

    if (!empty($user) && !empty($email) && !empty($password) && ! empty($cpassword)) {
      $query = "SELECT * FROM User WHERE Email='{$email}'";

      if (mysqli_num_rows(mysqli_query($conn, $query)) > 0) {
        $message[] = " {$email} This email already";
      } else {
        if ($password !== $cpassword) {
          $message[] = "conform password doesn't Match";
        } else {
          $sql = "INSERT INTO User VALUES('$user', '$email', '$password', 'user')";
          mysqli_query($conn, $sql);
          $message[] = "Successfully Registered";
        }
      }
    } else {
      $message[] = "Fill the form properly please !";
    }
  }
  ?>

</head>

<body>
  <?php if (!empty($message)) {
    $name = "kalkidan";
    foreach ($message as $message) {
      echo '
      <div class = "alert alert-info alert-dismissible position-fixed top-0 w-100 fade show">
      <strong> '.$message.'</strong>
      <button class = "btn-close" type = "button" data-bs-dismiss = "alert"></button>
      </div >';
    }
  } ?>

  <section class="vh-100">
    <div class="container py-4 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-sm-9 col-md-8 col-lg-5 border border p-3 text-center shadow">
          <h1 class="text-capitalize text-white"> register now </h1>
          <form method="post">
            <div class="form-group form-floating">
              <input type="text" class="form-control" placeholder="Name" name="user" />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-group form-floating">
            <input type="email" class="form-control" name="email" placeholder="Email" />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-group form-floating">
          <input type="password" class="form-control" placeholder="password" name="password" />
        <label for="floatingInput">password</label>
      </div>
      <div class="form-group form-floating">
        <input type="password" class="form-control" placeholder="conform password" name="cpassword" />
      <label for="floatingInput">conform password</label>
    </div>
    <div class="form-group">
      <select class="form-select" disabled aria-label="user role">
        <option selected>user</option>
        <option>Admin</option>
      </select>
    </div>
    <div class="form-group">
      <input type="submit" class="btn btn-primary py-3 w-100" value="Register Now" name="submit" />
  </div>
  <div class="mb-3 link">
    Already have an account ? <a href="./Login.php" class="btn btn-link btn-lg">Login</a>
  </div>
</form>
</div>
</div>
</div>
</section>
<script src="bootstrap.bundle.min.js"></script>
</body>

</html>