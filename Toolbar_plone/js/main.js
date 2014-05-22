/* To avoid users to positionate plone Toolbar we use JQ to do it*/
//$( ".userrole-authenticated" ).has( "#edit-zone" ).addClass( "full" );
/*
$(document).ready(function() {
	( "body.userrole-authenticated" ).has( "#edit-zone.plone-toolbar-left" ).css("padding-left", "60px");
	( "body.userrole-authenticated" ).has( "#edit-zone.plone-toolbar-left" ).css("padding-left", "120px");
	( "body.userrole-authenticated" ).has( "#edit-zone.plone-toolbar-top" ).css({"padding-top": "60px","padding-left": "0"});
	( "body.userrole-authenticated" ).has( "#edit-zone.compressed" ).css({"padding-top": "0","padding-left": "0"});
});
*/

// fix edit-zone for screens smallers than 480px on mobile
$(document).ready(function() {
    var viewportHeight = $(window).height();
	$( "#edit-zone nav" ).css("max-height", viewportHeight);
	$( "#edit-zone" ).css("right", "-120px");
});

/*move mobile toolbar*/
//encara es per tots això, s'ha d'arreglar
$(document).ready(function() {
	$( "#edit-zone .plone-toolbar-logo" ).click(function() {
		$( "#edit-zone" ).css("right", "0px");
	});
	$( "#edit-zone nav li" ).has( "a .plone-toolbar-caret" ).click(function() {
		$(this).addClass("active");
		$( "#edit-zone" ).css("right", "200px");
	});
});