<?php
    include("./setting.php");
    try {
      if ($_POST["action"] == "blogs") {
        $strsql = "SELECT * FROM blogs";
        $ary_blog = [];
        $rst_blog = mysqli_query($con, $strsql);
        while($row_blog = mysqli_fetch_array($rst_blog)) {
          $strsql = "SELECT * FROM blog_comments WHERE blog_id = '$row_blog[id]'";
          $rst_comment = mysqli_query($con, $strsql);
          $comment = mysqli_num_rows($rst_comment);
          $row_blog['comment'] = $comment;
          array_push($ary_blog, $row_blog);
        }
        $response = array (
          "status" => "ok",
          "data" => $ary_blog
        );
        echo json_encode($response);
      } else if ($_POST["action"] == "blog") {
        $strsql = "SELECT * FROM blogs WHERE id='$_POST[blog_id]'";
        $rst_blog = mysqli_query($con, $strsql);
        if($row_blog = mysqli_fetch_array($rst_blog)) {
          $strsql = "SELECT * FROM blog_comments WHERE blog_id = '$row_blog[id]'";
          $rst_comment = mysqli_query($con, $strsql);
          $ary_comment = [];
          while($row_comment = mysqli_fetch_array($rst_comment)) {
            array_push($ary_comment, $row_comment);
          }
          $row_blog['comments'] = $ary_comment;
          $response = array (
            "status" => "ok",
            "data" => $row_blog
          );  
        } else {
          $response = array (
            "status" => "no",
            "data" => ''
          );      
        } 
        echo json_encode($response);
      } else if ($_POST["action"] == "add") {
        $comment_date = date("d.m.Y");
        $strsql = "INSERT INTO blog_comments(blog_id, user_name, email, comment, comment_date) VALUES('$_POST[blog_id]', '$_POST[user_name]', '$_POST[email]', '$_POST[comment]', '$comment_date')";
        mysqli_query($con, $strsql);
        $ary_data = array (
          'blog_id' => $_POST['blog_id'],
          'user_name' => $_POST['user_name'],
          'email' => $_POST['email'],
          'comment' => $_POST['comment'],
          'comment_date' => $comment_date
        );
        $response = array (
          "status" => "ok",
          "data" => $ary_data
        );
        echo json_encode($response);
      } else if ($_POST["action"] == "like") {
          if ($_POST["direction"] == "inc") {
            $strsql = "UPDATE blogs SET cnt_like=cnt_like+1 WHERE id='$_POST[blog_id]'";
          } else {
            $strsql = "UPDATE blogs SET cnt_like=cnt_like-1 WHERE id='$_POST[blog_id]'";  
          }
          mysqli_query($con, $strsql);
          $strsql = "SELECT cnt_like FROM blogs WHERE id='$_POST[blog_id]'";
          $rst = mysqli_query($con, $strsql);
          $row = mysqli_fetch_object($rst);
          $ary_data = array (
            'blog_id' => $_POST['blog_id'],
            'favorite' => $row->cnt_like  
          );
          $response = array (
            'status' => 'ok',
            'data' => $ary_data
          );
          echo json_encode($response);
      }
    } catch (Exception $e) {
      $response = array("status"=>"error", "message" =>$e->getMessage());
      echo json_encode($response);
    }
?>