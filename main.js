var flipOnLoad = false;
var inited = false;
setupPage();
inited = true;

function jumpTo(page) {
		parent.location = page;
	}
	
function toggleNightMode() {
	var sheet = document.styleSheets[0];
	for (var ind = 0; ind < sheet.cssRules.length; ind++) {
	//	if (sheet.cssRules[ind].selectorText == "body") {
			var oldStyle = sheet.cssRules[ind].cssText;
			var oldStyleParts = oldStyle.split(/\{|\}/);
			var oldStyleArray = oldStyleParts[1].split(";");
			sheet.deleteRule(ind);
			var newStyle = oldStyleParts[0] + "{";
			for (var j = 0; j < oldStyleArray.length; j++){
				if (oldStyleArray[j].trim()=="")
					continue;
				var splits = oldStyleArray[j].split("rgb(");
				var type = splits[0].split(":")[0].trim();
				if (splits.length >= 2)
				{
					var val = splits[1].trim();
					if (type=="background-color"||type=="background"||type=="color") {
						newStyle += type + ":" + splits[0].split(":")[1] + "rgb(";
						var colorData = val.slice(0, -1).split(",");
						for (var q = 0; q < colorData.length; q++)
							newStyle += 255-colorData[q] + ",";
						newStyle = newStyle.slice(0, -1) + ");";
						continue;
					}
				}
				newStyle += oldStyleArray[j] + ";";
			}
			newStyle += "}";
			sheet.insertRule(newStyle, ind);
	//	}
	}
	if (!inited)
		flipOnLoad = true;
	if (inited)
	{
		flipImages();
		var oldNightMode = localStorage.getItem("net.jaredwhitney.nightModeEnable");
		if (oldNightMode=="true")
			localStorage.setItem("net.jaredwhitney.nightModeEnable", "false");
		else
			localStorage.setItem("net.jaredwhitney.nightModeEnable", "true");
	}
}

function setupPage(){
	var nightMode = localStorage.getItem("net.jaredwhitney.nightModeEnable");
	if (nightMode=="true") {
		toggleNightMode();
	}
}
var images;
function flipImages(){
	images = document.getElementsByTagName("img");
	var ind = 0;
	for (; ind < images.length ; ind++) {
		if (images[ind].className=="swappableImage") {
			if (images[ind].src.indexOf("NightMode")==-1) {
				var dind = images[ind].src.lastIndexOf(".");
				var imparts = [images[ind].src.slice(0, dind), images[ind].src.slice(dind+1)];
				images[ind].src = imparts[0] + "NightMode." + imparts[1];
			}
			else
				images[ind].src = images[ind].src.split("NightMode.")[0] + "." + images[ind].src.split("NightMode.")[1];
		}
	}
}
