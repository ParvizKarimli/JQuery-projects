$(document).ready(function(){
	$("p#demo").click(function(){
		$(this).css("background-color", "yellow");
	});
	
	$("p.hub").dblclick(function(){
		$("p.hub").css("background-color", "yellow");
	});
	
	$("p#el").mouseenter(function(){
		$(this).css("background-color", "yellow");
	});
	
	$("p#el").mouseleave(function(){
		$(this).css("background-color", "red");
	});
	
	$("#hover").hover(function(){
		$(this).css("background-color", "yellow");
	},
	function(){
		$(this).css("background-color", "red");
	});
	
	$(":text").focus(function(){
		$(this).css("background-color", "yellow");
	});
	
	$(":text").blur(function(){
		$(this).css("background-color", "red");
	});
	
	$("a[target='_blank']").on({
		mousedown: function(){
			$(this).css("color", "yellow");
		},
		mouseup: function(){
			$(this).css("color", "green");
		}
	});
});