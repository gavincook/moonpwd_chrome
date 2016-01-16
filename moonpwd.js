;
(function($){
	$(function(){
		chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
			$(".pwd").html($.md5("system_userMoon"+getDateStr()));
		});

		$(document).on("click", ".fill-btn", function(){
			chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
				chrome.tabs.executeScript(tabs[0].id, {
					code:"document.querySelector(\"[name='userName']\").value='system_user';"+
						 "document.querySelector(\"[name='password']\").value='"+$.md5("system_userMoon"+getDateStr())+"';"
				}, function(){

				});
			});
		});
	});

	function getDateStr(){
		var date = new Date();
		return date.getFullYear() + "-" + leftPad((date.getMonth() +1 )) + "-" + leftPad(date.getDate())  + " " + leftPad(date.getHours()) + ":" +leftPad(date.getMinutes());
	}

	function leftPad(num){
		if((+num) < 10){
			return "0"+num;
		}
		return num;
	}

})(jQuery);
