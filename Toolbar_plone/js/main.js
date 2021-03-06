// fix edit-zone for screens smallers than 480px on mobile (scroll inside first level)
/*
$(document).ready(function() {
    var viewportHeight = $(window).height();
	$( "#edit-zone nav" ).css("max-height", viewportHeight);
	$( "#edit-zone" ).css("right", "-120px");
});
*/

$(document).ready(function(){
	if ($(window).width() < "768"){//mobile
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
		//left i top
		if ($("#edit-zone").hasClass("plone-toolbar-left")) { //left
			$( "#edit-zone .plone-toolbar-logo" ).click(function() {
				$("body").removeAttr("style");
				if ($("#edit-zone").hasClass("expanded")){
					$( "#edit-zone" ).removeClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").css("left", "120px");
				} else {
					$( "#edit-zone" ).addClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").css("left", "60px");
				}
			});
			$( "#edit-zone .plone-toolbar-logo" ).dblclick(function() {
				$("body").removeAttr("style");
				if ($("#edit-zone").hasClass("compressed")){
					$( "#edit-zone" ).removeClass("compressed");
				} else {
					$( "#edit-zone" ).addClass("compressed");
					$("body").css("left", "0");
				}
			});
		} else { //top
			$( "#edit-zone .plone-toolbar-logo" ).click(function() {
				$("body").removeAttr("style");
				if ($("#edit-zone").hasClass("expanded")){
					$( "#edit-zone" ).removeClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").css("top", "60px");
				} else {
					$( "#edit-zone" ).addClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").removeAttr("style");
					$("body").css("top", "60px");
				}
			});
			$( "#edit-zone .plone-toolbar-logo" ).dblclick(function() {
				$("body").removeAttr("style");
				if ($("#edit-zone").hasClass("compressed")){
					$( "#edit-zone" ).removeClass("compressed");
				} else {
					$( "#edit-zone" ).addClass("compressed");
					$("body").removeAttr("top", "0");
				}
			});
		}
		
		//active
		$( "#edit-zone nav li" ).has( "a .plone-toolbar-caret" ).click(function() {
			if ($(this).hasClass("active")) {
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$("#edit-zone nav li").removeClass("active");
				$(this).addClass("active");
			}
		});

		//switcher -- provisional
		$( "#edit-zone .plone-toolbar-switcher" ).click(function() {
			if ($("#edit-zone").hasClass("plone-toolbar-top")) {
				$( "#edit-zone" ).addClass("plone-toolbar-left");
				$( "#edit-zone" ).removeClass("plone-toolbar-top");
			} else {
				$( "#edit-zone" ).addClass("plone-toolbar-top");
				$( "#edit-zone" ).removeClass("plone-toolbar-left");
			}
		});
	}
});

