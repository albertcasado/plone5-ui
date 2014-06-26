// fix edit-zone for screens smallers than 480px on mobile (scroll inside first level)
/*
$(document).ready(function() {
    var viewportHeight = $(window).height();
	$( "#edit-zone nav" ).css("max-height", viewportHeight);
	$( "#edit-zone" ).css("right", "-120px");
});
*/

$(document).ready(function(){
	$( "body" ).has(".plone-toolbar-left").css({'margin-left':'60px','margin-top':'0'});
	$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'60px'});
	$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'120px','margin-top':'0'});
	if ($(window).width() < "768"){//mobile
		$( "body" ).has(".plone-toolbar-left").css({'margin-left':'0','margin-top':'0'});
		$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'0'});
		$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'0','margin-top':'0'});
		$( "#edit-zone" ).css("right", "-120px");
		$( "#edit-zone .plone-toolbar-logo" ).click(function() {
			if ($(this).hasClass("open")){
				$( "#edit-zone" ).css("right", "-120px");
				$( "body" ).css("margin-left", "0");
				$(this).removeClass("open");
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$( "#edit-zone" ).css("right", "0");
				$(this).addClass("open");
				$( "body" ).css("margin-left", "-120px");
			}
		});
		$( "#edit-zone nav li" ).has( "a .plone-toolbar-caret" ).click(function() {
			if ($(this).hasClass("active")) {
				$( "#edit-zone" ).css("right", "0");
				$( "body" ).css("margin-left", "-120px");
				$( "#edit-zone nav li" ).removeClass("active");
			} else {
				$( "#edit-zone nav li" ).removeClass("active");
				$(this).addClass("active");
				$( "#edit-zone" ).css("right", "180px");
				$( "body" ).css("margin-left", "-300px");
			}
		});
	}
	else { //not mobile
		//left i top
		if ($("#edit-zone").hasClass("plone-toolbar-left")) { //left
			$( "#edit-zone .plone-toolbar-logo" ).click(function() {
				if ($("#edit-zone").hasClass("expanded")){
					$( "#edit-zone" ).removeClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").css("margin-left", "120px");
				} else {
					$( "#edit-zone" ).addClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").css("margin-left", "60px");
				}
				$( "body" ).has(".plone-toolbar-left").css({'margin-left':'60px','margin-top':'0'});
				$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'60px'});
				$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'120px','margin-top':'0'});
			});
			$( "#edit-zone .plone-toolbar-logo" ).dblclick(function() {
				$("body").removeAttr("style");
				if ($("#edit-zone").hasClass("compressed")){
					$( "#edit-zone" ).removeClass("compressed");
				} else {
					$( "#edit-zone" ).addClass("compressed");
					$("body").css("margin-left", "0");
				}
				$( "body" ).has(".plone-toolbar-left").css({'margin-left':'60px','margin-top':'0'});
				$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'60px'});
				$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'120px','margin-top':'0'});
			});
		} else { //top
			$( "#edit-zone .plone-toolbar-logo" ).click(function() {			
				if ($("#edit-zone").hasClass("expanded")){
					$( "#edit-zone" ).removeClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").css("margin-top", "60px");
				} else {
					$( "#edit-zone" ).addClass("expanded");
					$( "#edit-zone nav li" ).removeClass("active");
					$("body").removeAttr("style");
					$("body").css("margin-top", "60px");
				}
				$( "body" ).has(".plone-toolbar-left").css({'margin-left':'60px','margin-top':'0'});
				$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'60px'});
				$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'120px','margin-top':'0'});
			});
			$( "#edit-zone .plone-toolbar-logo" ).dblclick(function() {
				$("body").removeAttr("style");
				if ($("#edit-zone").hasClass("compressed")){
					$( "#edit-zone" ).removeClass("compressed");
				} else {
					$( "#edit-zone" ).addClass("compressed");
					$("body").removeAttr("padding-top", "0");
				}
				$( "body" ).has(".plone-toolbar-left").css({'margin-left':'60px','margin-top':'0'});
				$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'60px'});
				$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'120px','margin-top':'0'});
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
			$( "body" ).has(".plone-toolbar-left").css({'margin-left':'60px','margin-top':'0'});
			$( "body" ).has(".plone-toolbar-top").css({'margin-left':'0','margin-top':'60px'});
			$( "body" ).has(".plone-toolbar-left.expanded").css({'margin-left':'120px','margin-top':'0'});
		});
	}
});