$(document).ready(function()
{
	$('body').prepend("<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-86484991-1', 'auto');ga('send', 'pageview');</script>");
	$('body').prepend("<div id=\"navInclude\"/>");
	$('<title>', {'text':"Jared Whitney's Website"}).appendTo('head');
	document.getElementById("navInclude").innerHTML =
		"<h1> <center>" +
		"	jaredwhitney.net" +
		"</center> </h1>" +

		"<button type=\"button\" class=\"navButton\" id=\"borderElement\" onClick=\"jumpTo('/')\">" +
			"Home" +
		"</button>" +
		
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
		"</button>" +
		
		"<img class=\"swappableImage\" src=\"img\\bg.jpg\" style=\"position:fixed;width:100%;height:100%;z-index:-1;top:0;left:0;display:inline-block;\"/>";
		
		if (flipOnLoad)
			flipImages();
		
});
