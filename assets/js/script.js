//Check off specific Todos By Clicking
$("ul").on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//Click on X to delete one goal
$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Stops from making the parent classes being called
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
	//13 is the keycode for the 'Enter' key
	if(e.which === 13) {
		var todoText = $(this).val();
		$(this).val('');
		//create a new li and add to ul
		$('ul').append("<li><span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> "+ todoText +"</li>");
	}
});

$('.fa-plus-square-o').click(function() {
	$("input[type='text']").fadeToggle();
});