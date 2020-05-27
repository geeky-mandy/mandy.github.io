// Check off specific todos on clicking
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed");
});
// Delete todos while clicked on remove
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//Append a new entry
$("input[type='text']").keypress(function(event){
	// When enter is pressed
	if(event.which === 13)
	{
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + "</li>")
	}
});
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(600);

	
});