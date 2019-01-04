<?php
$dbc = mysqli_connect('localhost', 'root', '', 'testdata');

		$login = mysqli_real_escape_string($dbc, trim($_POST['login']));
		$password = mysqli_real_escape_string($dbc, trim($_POST['password']));
		if(!empty($login) && !empty($password)) {
			$query = "SELECT * FROM `users` WHERE login = '$login' AND password = SHA('$password')";
			$data = mysqli_query($dbc,$query);
			if(mysqli_num_rows($data) == 1) {
				$row = mysqli_fetch_assoc($data);
				setcookie('id', $row['id'], time() + (60*60*24*30));
				setcookie('login', $row['login'], time() + (60*60*24*30));
			}
			else {
				echo 'Извините, вы должны ввести правильные имя пользователя и пароль';
			}
		}
		else {
			echo 'Извините вы должны заполнить поля правильно';
		}
?>