$(document).ready(function()
{
	$('body').prepend("<div id=\"navInclude\"/>");
	$('<title>', {'text':"Jared Whitney's Website"}).appendTo('head');
	document.getElementById("navInclude").innerHTML =
		"<h1> <center>" +
		"	jaredwhitney.net" +
		"</center> </h1>" +

		"<button type=\"button\" class=\"navButton\" id=\"borderElement\" onClick=\"jumpTo('art.html')\">" +
			"Art" +
		"</button>" +
	
		"<button type=\"button\" class=\"navButton\" id=\"borderElement\" onClick=\"jumpTo('programming.html')\">" +
			"Programming" +
		"</button>" +
	
		"<button type=\"button\" class=\"navButton\" id=\"borderElement\" onClick=\"jumpTo('writing.html')\">" +
			"Writing" +
		"</button>" +
	
		"<button type=\"button\" class=\"navButton\" id=\"borderElement\" onClick=\"jumpTo('music.html')\">" +
			"Music" +
		"</button>" +
	
		"<button type=\"button\" class=\"navButton\" id=\"borderElement\" onClick=\"jumpTo('languages.html')\">" +
			"Languages" +
		"</button>" +
	
		"<button type=\"button\" class=\"navButton rightAlign\" id=\"borderElement\" onClick=\"jumpTo('about.html')\">" +
			"About" +
		"</button>" +
	
		"<button type=\"button\" class=\"navButton rightAlign\" id= \"borderElement\" onClick=\"toggleNightMode();\" style=\"background: #808080;\">" +
			"<image src=\"nightmode.png\" width=20px height=20px/>" +
		"</button>";
		
		if (flipOnLoad)
			flipImages();
		
});
