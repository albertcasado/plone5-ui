/* To avoid users to positionate plone Toolbar we use JQ to do it*/
//$( ".userrole-authenticated" ).has( "#edit-zone" ).addClass( "full" );


// fix edit-zone for screens smallers than 480px on mobile
$(document).ready(function() {
    var viewportHeight = $(window).height();
	$( "#edit-zone nav" ).css("max-height", viewportHeight);
	$( "#edit-zone" ).css("right", "-120px");
});

/*move mobile toolbar*/
$(document).ready(function() {
	$( "#edit-zone .plone-toolbar-logo" ).click(function() {
		$( "#edit-zone" ).css("right", "0px");
	});
	$( "#edit-zone nav li a" ).has( ".plone-toolbar-caret" ).click(function() {
		$( "#edit-zone" ).css("right", "200px");
	});
});