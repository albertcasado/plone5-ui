/* To avoid users to positionate plone Toolbar we use JQ to do it*/
//$( ".userrole-authenticated" ).has( "#edit-zone" ).addClass( "full" );


// fix edit-zone for screens smallers than 480px on mobile
$(document).ready(function() {
    var viewportHeight = $(window).height();
	$( "#edit-zone nav" ).css("max-height", viewportHeight);
});