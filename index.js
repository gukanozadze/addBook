const btn = $('#button');

const table = $('table');
const errorMSG = $('.error_msg');
const successMSG = $('.success_msg');

btn.on('click', function(){
	


		const title = $('#title').val();
		const author = $('#author').val();
		const ISBN = $('#ISBN').val();
		successMSG.slideDown(400).delay(2500).slideUp(300);
		table.append(`<tr>
  				<td>${title}</td>
  				<td>${author}</td>
  				<td>${ISBN}</td>
  				</tr>`)
	
})