<?php
    include("./setting.php");
    try {
      if ($_POST["action"] == "register") {
        $email = $_POST["email"];
        $token = openssl_random_pseudo_bytes(32);
        $token = bin2hex($token);
        $strsql = "SELECT * FROM subscribe_mails WHERE email='$email'";
        $rst = mysqli_query($con, $strsql);
        if (mysqli_num_rows($rst) > 0) {
            $strsql="UPDATE subscribe_mails SET token='$token' WHERE email='$email'";
        } else {
            $strsql="INSERT INTO subscribe_mails(email, token) VALUES('$email', '$token')";
        }
        mysqli_query($con, $strsql);
        $email_from = 'info@ikleenik.com';
        $email_subject = "Confirm Subscribe";
        $email_body = "Hi.\n" .
                "Thanks for subscribing to the iKleenik email list. To complete your subscription, you need to confirm you got this email. To do so, please click the link below: \n\n" .
                "https://ikleenik.com/newsletter/c/$token \n\n" .
                "If you subscribed in error or no longer want to hear from us, click the link below and you will be instantly removed from our list: \n\n" .
                "https://ikleenik.com/newsletter/d/$token \n";
        $headers = "From: $email_from \r\n";
        $headers .= "Reply To: $email \r\n";
        
        mail($email, $email_subject, $email_body, $headers);
        $response = array("status"=>"ok");
        echo json_encode($response);
      } else if ($_POST["action"] == "c") {
        $strsql = "UPDATE subscribe_mails SET subscribe_date=NOW(), token='', status=1 WHERE token='$_POST[token]'";
        mysqli_query($con, $strsql);
        $response = array("status"=>"ok");
        echo json_encode($response);
      } else if ($_POST["action"] == "d") {
        $strsql = "UPDATE subscribe_mails SET unsubscribe_date=NOW(), token='', status=0 WHERE token='$_POST[token]'";
        mysqli_query($con, $strsql);
        $response = array("status"=>"ok");
        echo json_encode($response);
      } else if ($_POST["action"] == "contact") {
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        // $recahpter
        $email_from = $_POST["email"];
        $user_name = $_POST["user_name"];
        $email_to = 'info@ikleenik.com';
        $email_subject = $_POST["subject"];
        $email_body = $_POST["message"];
        $email_body = wordwrap($email_body, 70);
        $headers = "From: $user_name $email_from \r\n";
        $headers .= "Reply To: $email_to \r\n";
        
        mail($email_to, $email_subject, $email_body, $headers);
        $response = array("status"=>"ok");
        echo json_encode($response);  
      }
    } catch (Exception $e) {
      $response = array("status"=>"error", "message" =>$e->getMessage());
      echo json_encode($response);
    }
?>