$(document).ready(function(){var e=$(window).height();$("#edit-zone nav").css("max-height",e),$("#edit-zone").css("right","-120px")}),$(document).ready(function(){$(window).height()<"768"?($("#edit-zone .plone-toolbar-logo").click(function(){$(this).hasClass("open")?($("#edit-zone").css("right","-120px"),$("body").css("right","0"),$(this).removeClass("open"),$("#edit-zone nav li").removeClass("active")):($("#edit-zone").css("right","0"),$(this).addClass("open"),$("body").css("right","120px"))}),$("#edit-zone nav li").has("a .plone-toolbar-caret").click(function(){$(this).hasClass("active")?($("#edit-zone").css("right","0px"),$("body").css("right","120px"),$("#edit-zone nav li").removeClass("active")):($("#edit-zone nav li").removeClass("active"),$(this).addClass("active"),$("#edit-zone").css("right","200px"),$("body").css("right","320px"))})):($("#edit-zone").hasClass("expanded")&&$("body").css("left","120px"),$("#edit-zone.plone-toolbar-left .plone-toolbar-logo").click(function(){$(this).hasClass("open")?($("#edit-zone").addClass("expanded"),$("body").css("left","120px"),$(this).removeClass("open"),$("#edit-zone nav li").removeClass("active")):($("#edit-zone").removeClass("expanded"),$(this).addClass("open"),$("body").css("left","60px"))}),$("#edit-zone nav li").has("a .plone-toolbar-caret").click(function(){$(this).hasClass("active")?$("#edit-zone nav li").removeClass("active"):($("#edit-zone nav li").removeClass("active"),$(this).addClass("active"))}))});