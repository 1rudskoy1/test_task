<?php
unset($_COOKIE['user_id']);
unset($_COOKIE['username']);
setcookie('id', '', -1, '/');
setcookie('login', '', -1, '/');
$home_url = 'http://' . $_SERVER['HTTP_HOST'];
 header('Location: ' . $home_url);
?>