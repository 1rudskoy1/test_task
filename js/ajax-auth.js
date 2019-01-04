$(document).ready(function() {
	  $(".form__btn").click(function (){	
	  	  $(".error").remove();  
	  // собираем данные в один массив
		  let login = $("#login").val().trim();
		  let password = $("#Password").val().trim();
	  
	  //обрабатываю данные
	 	  var error_arr = [];
		  if(login.length < 6){
		  	error_arr.push('Логин слишком короткий,минимум 6 символов');
		  } 
		  if(password.length < 6 ){
		  	error_arr.push('Пароль слишком короткий,минимум 6 символов');
		  } 	  
	  
	  // проверка на наличие ошибок
		  if(error_arr.length > 0){{
		  	$(".form").append("<span class='error'>"+error_arr[0]+"</span>");
		  	// блокировка перехода на другую страницу
			return false;
		  }
		  }else{
			$.ajax({
				url: '../signin.php',
				type: 'POST',
				cache: false,
				data: {'login':login,'password' :password },
				dataType:'html',
				success: funcSuccess 
			});
		  }  	  
	});	
});

function funcSuccess(data){
	$(".fine").remove();
	if(data == "Извините, вы должны ввести правильные имя пользователя и пароль"  ){
		$(".form").append("<span class='fine'>"+data+"</span>");
	}else if (data == "Извините вы должны заполнить поля правильно"){
		$(".form").append("<span class='fine'>"+data+"</span>");
	}else{
		window.location.href = 'cabinet.php';
	}
	
}
