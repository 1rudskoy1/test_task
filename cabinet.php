<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Кабинет</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="info">
				<h3>Кабинет</h3>
				<a href="exit.php">Выйти</a>
		    	<label for="login" class="form__label">Ваш логин: <?= $_COOKIE["login"] ?></label>
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="js/ajax-auth.js"></script>
</body>
</html>