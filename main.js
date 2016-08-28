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
	if (inited)
	{
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

