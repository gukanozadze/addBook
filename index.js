title = $('#title')
author = $('#author')
isbn = $('#ISBN')
error_message = $('.error_msg')
success_message = $('.success_msg')

showMessage = (message) => message.show(400).delay(2000).hide(300)
	

$('#button').on('click', function(){

	if (title.val().trim(), author.val().trim(), isbn.val().trim() == ''){
		showMessage(error_message)

	}else{
		showMessage(success_message)
		$('table').append(`
			<tr>
    			<td>${title.val()}</td>
    			<td>${author.val()}</td>
    			<td>${isbn.val()}</td>
  			</tr>
		`)
	}
})

