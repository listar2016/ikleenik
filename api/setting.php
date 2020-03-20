<?php
  define('DB_HOST', 'ikleenik.com.mysql');
  define('DB_NAME', 'ikleenik_com');
  define('DB_USER', 'ikleenik_com');
  define('DB_PASS', 'tSnNdKxMDWvs25URAmvmKQN2');
  
  
  $con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
  if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>  

