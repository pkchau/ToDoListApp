//Top Task nav bar redirects for My Tasks, All Tasks and History pages
$(".alltasks").click(function(){
	 window.location.href = "alltasks.html";
})

$(".mytasks").click(function(){
	 window.location.href = "index.html";
})

$(".history").click(function(){
	 window.location.href = "history.html";
})

//Show Add Task Window after clicking on Add Task button
$(".addtaskbtn").click(function(){
	document.getElementById("addtask").style.height="100%";
})

//Hide Add Task Window after clicking on cancel/submit
function goBack() {
	document.getElementById("addtask").style.height="0%";
}

//Add task to My Tasks page after clicking submit from the My Tasks window
$(".submitmytask").click(function() {
	var new_name = $('#name').val();
	var new_person = $('#assign').find(":selected").text();
	var new_due = $('#due').val();
	var new_points = $('#points').val();
	$('.list-group').append('<li class="reversecompleted-item list-group-item row">'+'<div class="earned-points"></div>'	+ '<button type="button" class="round-button complete-button"></button>'
	+ '<span class="col-xs-4 item">' + 	new_name+ '<br>'  + '</span>' + '<span class="col-xs-2 points">' + new_points + '</span>' + '<span class="col-xs-2 date">' + new_due
	 + '</span>' +  '<br>' + '<br>' + '<div class="undo-complete"></div>'+ '</li>')
 	document.getElementById("addtask").style.height="0%";
});

//Add task to All Tasks page after clicking submit from the All Tasks window
$(".submitalltasks").click(function() {
	var new_name = $('#name').val();
	var new_person = $('#assign').find(":selected").text();
	var new_due = $('#due').val();
	var new_points = $('#points').val();
	$('.list-group').append('<li class="list-group-item reversecompleted-item row">' + '<div class="earned-points"></div>' +'<button type="button" class="round-button complete-button"></button>'
	+ '<span class="col-xs-3 item">' + new_name + '<br>' + '<div class="undo"></div>' + '</span>' + '<span class="col-xs-3 person">' + '<button type="button" class="btn btn-primary glyphicon glyphicon-user assign-btn">' + " " +
	 '<span class="button-font">' + new_person + '</span></button></span>'
 + '<span class="col-xs-1 points">' + new_points + '</span>' + '<span class="col-xs-2 date">' +
	new_due + '</span>' + '<br>' + '<br>' + '<div class="undo-complete"></div>'+'</li>')
 	document.getElementById("addtask").style.height="0%";
});

//Mark item as completed function on My Tasks and All Tasks pages
//After user clicks on the round button...
//Slide green background across page and add a checkmark with green background to the round button
//Show earned points
//Add an undo button
//Fade out the item in 5s unless the user clicks undo
$(document).on('click','.complete-button',function() {
	var new_points = $(this).siblings('span.points').text();
	//Add an undo button
		var new_undo_complete_btn = $('<button>Undo</button>').addClass('btn btn-default btn-sm undo-complete-button');
		$(this).siblings(".undo-complete").append(new_undo_complete_btn)
	$(this).siblings(".earned-points").append("+"+new_points).css('color','white')
	$(this).parent().addClass('completed-item');
	$(this).removeClass('complete-button')
	$(this).addClass('completed-btn glyphicon glyphicon-ok')
	$(this).parent().fadeOut(4000);
});

//If the user clicks undo after marking a task as complete, undo all the actions that came with marking the task as complete
$(document).on('click','.undo-complete-button',function() {
	$(this).parent().parent().removeClass('completed-item');
	$(this).parent().siblings(".completed-btn").addClass('complete-button')
	$(this).parent().siblings(".completed-btn").removeClass('completed-btn glyphicon glyphicon-ok')
	$(this).parent().parent().addClass('reversecompleted-item');
	$(this).parent().siblings(".earned-points").empty()
	$(this).parent().parent().stop().fadeOut()
	$(this).parent().parent().fadeIn()
	$(this).parent().empty()
});

//Assign person function: When clicking on a person button on the All Tasks page...
//change button to popup dropdown list, select person and hit submit to see the updated assign person button.
$(document).on('click','.assign-btn',function() {
		$(this).hide()
		$(this).parent().append($("#dialog").show());
		$('.submitassign').click(function() {
			var new_person = $('#dialog').find(":selected").text();
			$(this).parent().siblings('.assign-btn').children().text(" "+new_person)
			$("#dialog").hide()
			$(this).parent().siblings('.assign-btn').show()
	});
});
