<?php
$dbc = mysqli_connect('localhost', 'root', '', 'testdata');
		$email= htmlspecialchars($_POST["email"]);
		$password = htmlspecialchars($_POST["password"]);
		$ver_password = htmlspecialchars($_POST["ver_password"]);
		$login = htmlspecialchars($_POST["login"]);
		if(!empty($email) && !empty($password) && !empty($ver_password) && !empty($login)) {
			if(($password == $ver_password)){
				$query = "SELECT * FROM `users` WHERE email = '$email' ||  login = '$login'";
				$data = mysqli_query($dbc, $query);
				if(mysqli_num_rows($data) == 0) {
					$query ="INSERT INTO `users`(email,login,password) VALUES ('$email','$login', SHA('$password'))";
					mysqli_query($dbc,$query);
					echo 'Всё готово, можете авторизоваться';
					mysqli_close($dbc);
				}else {
					echo 'Логин или email уже существует';
				}
			}else{
				echo "Пароли не совпадают";
			}

	}else{
		echo "Заполните все поля";
	}