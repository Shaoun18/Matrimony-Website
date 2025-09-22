<?php
session_start();

// Connect to MySQL server (no DB yet)
$conn = mysqli_connect('localhost', 'root', '');
if (! $conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

// Create database if not exists
$dbname = "login_page";
mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS $dbname");
mysqli_select_db($conn, $dbname);

// Create table if not exists
$table       = "userTable";
$createTable = "
CREATE TABLE IF NOT EXISTS $table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT,
    height VARCHAR(10),
    gender VARCHAR(10),
    occupation VARCHAR(100),
    password VARCHAR(255),
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
mysqli_query($conn, $createTable);

// Get form data
$name       = $_POST['name'];
$email      = $_POST['email'];
$age        = $_POST['age'];
$height     = $_POST['height'];
$gender     = $_POST['gender'];
$occupation = $_POST['occupation'];
$password   = $_POST['password'];
$confirm    = $_POST['password_confirmation'];

// Password match check
if ($password !== $confirm) {
    die("<center><h1>Passwords do not match!</h1></center>");
}

// File upload
if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] == 0) {
    $target_dir = "uploads/";
    if (! is_dir($target_dir)) {
        mkdir($target_dir, 0777, true);
    }

    $avatar = $target_dir . basename($_FILES["avatar"]["name"]);
    move_uploaded_file($_FILES["avatar"]["tmp_name"], $avatar);
} else {
    $avatar = "";
}

// Check if user exists
$result = mysqli_query($conn, "SELECT * FROM $table WHERE name='$name' OR email='$email'");
if (mysqli_num_rows($result) > 0) {
    echo "<center><h1>User Already Exists</h1></center>";
} else {
    $reg = "INSERT INTO $table(name,email,age,height,gender,occupation,password,avatar)
            VALUES('$name','$email','$age','$height','$gender','$occupation','$password','$avatar')";
    if (mysqli_query($conn, $reg)) {
        echo "<center><h1>Registration Successful</h1></center>";
    } else {
        echo "<center><h1>Error: " . mysqli_error($conn) . "</h1></center>";
    }
}
