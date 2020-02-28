<?php
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $subject = $_POST['subject'];
    // $message = $_POST['message'];
    $name = "Test User";
    $email = "listar0117@outlook.com";
    $subject = "test subject";
    $message = "This is test message";

    $to = "info@ikleenik.com";
    $email_body = "User Name: $name.\n".
        "User Email: $email.\n".
        "User Message: $message.\n";
    $headers = "From: $email \r\n";
    $headers .= "Reply To: $email \r\n";
    try {
      mail($to, $subject, $email_body, $headers);
      die("ok");
    } catch (Exception $e) {
      die($e->getMessage());
    }
?>