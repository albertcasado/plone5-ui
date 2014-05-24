// fix edit-zone for screens smallers than 480px on mobile (scroll inside first level)
$(document).ready(function() {
    var viewportHeight = $(window).height();
	$( "#edit-zone nav" ).css("max-height", viewportHeight);
	$( "#edit-zone" ).css("right", "-120px");
});


$(document).ready(function(){
	if ($(window).height() < "768"){
		$( "#edit-zone .plone-toolbar-logo" ).click(function() {
			if ($(this).hasClass("open")){
				$( "#edit-zone" ).css("right", "-120px");
				$( "body" ).css("right", "0");
				$(this).removeClass("open");
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$( "#edit-zone" ).css("right", "0");
				$(this).addClass("open");
				$( "body" ).css("right", "120px");
			}
		});
		$( "#edit-zone nav li" ).has( "a .plone-toolbar-caret" ).click(function() {
			if ($(this).hasClass("active")) {
				$( "#edit-zone" ).css("right", "0px");
				$( "body" ).css("right", "120px");
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$( "#edit-zone nav li" ).removeClass("active");
				$(this).addClass("active");
				$( "#edit-zone" ).css("right", "200px");
				$( "body" ).css("right", "320px");
			}
		});
	}
	else { //not mobile
		if ($("#edit-zone").hasClass("expanded")){
			$("body").css("left", "120px");
		}
		$( "#edit-zone.plone-toolbar-left:not(.compressed) .plone-toolbar-logo" ).click(function() {
			if ($(this).hasClass("open")){
				$( "#edit-zone" ).addClass("expanded");
				$( "body" ).css("left", "120px");
				$(this).removeClass("open");
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$( "#edit-zone" ).removeClass("expanded");
				$(this).addClass("open");
				$( "body" ).css("left", "60px");
				$( "#edit-zone nav li" ).removeClass("active");
			}
		});
		$( "#edit-zone.plone-toolbar-left .plone-toolbar-logo" ).dblclick(function() {
			if ($("#edit-zone").hasClass("compressed")){
				$( "#edit-zone" ).removeClass("compressed");
				$( "body" ).css("left", "60px");
			} else {
				$( "#edit-zone" ).addClass("compressed");
				$( "body" ).css("left", "0");
			}
		});
		$( "#edit-zone nav li" ).has( "a .plone-toolbar-caret" ).click(function() {
			if ($(this).hasClass("active")) {
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$( "#edit-zone nav li" ).removeClass("active");
				$(this).addClass("active");
			}
		});
	}
});



