// tabbed content
// http://www.entheosweb.com/tutorials/css/tab_menu.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$(".tab_menu li").click(function() {

	$(".tab_content").hide();
	var activeTab = $(this).attr("rel"); 
	$("#"+activeTab).fadeIn();		

	$(".tab_menu li").removeClass("active");
	$(this).addClass("active");

	$(".tab_heading").removeClass("focus");
	$(".tab_heading[rel^='"+activeTab+"']").addClass("focus");

});
/* if accordeon mode */
$(".tab_heading").click(function() {

	$(".tab_content").hide();
	var focusTab = $(this).attr("rel"); 
	$("#"+focusTab).fadeIn();

	$(".tab_heading").removeClass("focus");
	$(this).addClass("focus");

	$(".tab_menu li").removeClass("active");
	$(".tab_menu li[rel^='"+focusTab+"']").addClass("active");
});

 