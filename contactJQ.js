$('#contactForm').on('submit',function(e)
{
	var formData = new FormData(this);

	alert("here");

	$.ajax({

		url:'contact.php',
		type:'POST',
		data: formData,
		success:function(data)
		{
			alert(data);
		}
	})
});