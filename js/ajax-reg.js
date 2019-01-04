$(document).ready(function() {
	  let rv_name = /^[a-zA-Zа-яА-Я0-9]+$/;
   	  let rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	  $(".form__btn").click(function (){	
	  	  $(".error").remove();  
	  // собираем данные в один массив
		  let email = $("#Email").val().trim();
		  let login = $("#login").val().trim();
		  let password = $("#Password").val().trim();
		  let ver_password = $("#Ver_password").val().trim();
	  
	  //обрабатываю данные
	 	  var error_arr = [];
		  if(email.length < 6 || !rv_email.test(email)){
		  	error_arr.push('Вы ввели некоректный email');
		  } 
		  if(login.length < 6 || !rv_name.test(login)){
		  	error_arr.push('Вы ввели некоректный логин минимум 6 символов');
		  } 
		  if(password.length < 6 ||  !rv_name.test(password)){
		  	error_arr.push('Вы ввели некоректный пароль');
		  } 
		  if(ver_password != password){
		  	error_arr.push('пароли не совпадают');
		  } 	  
	  
	  // проверка на наличие ошибок
		  if(error_arr.length > 0){{

		  }
			$(".form").append("<span class='error'>"+error_arr[0]+"</span>");
			// блокировка перехода на другую страницу
			return false;
		  }else{
			$.ajax({
				url: '../reg.php',
				type: 'POST',
				cache: false,
				data: {'email':email,'login':login,'password' :password,'ver_password':ver_password },
				dataType:'html',
				success: funcSuccess 
			});
		  }  	  
	});	
});

function funcSuccess(data){
	$(".fine").remove();
	if(data != "Логин или email уже существует" ){
		alert("Спасибо за регистрацию,теперь вы можете авторизироваться");
	}
	$(".form").append("<span class='fine'>"+data+"</span>");
}
