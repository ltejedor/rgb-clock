var colorOrder = 0;
document.addEventListener('click', function() {
	if(colorOrder < 2){
		colorOrder++;
	}else{
		colorOrder = 0;
	}
}, false);


setInterval(function(){
    var d = new Date();

    var hours = d.getHours();
		if (hours > 12) {
		    hours -= 12;
		} else if (hours === 0) {
		   hours = 12;
		}

		var minutes = d.getMinutes();
		var seconds = d.getSeconds();

		var colors = setColors(hours, minutes, seconds);


		document.getElementById("clock").style.backgroundColor="rgb(" + colors[0] + "," + colors[1] +"," + colors[2] + ")";

		//console.log("rgb(" + red + "," + blue +"," + green + ")");

    /*console.log('hours: ' + hours + ' ' + red);
    console.log('minutes: ' + minutes + ' ' + blue);
    console.log('seconds: ' + seconds + ' ' + green);*/
}, 1000);


function setColors(hours, minutes, seconds){
		var red = Math.round(hours * 21.25);
		var blue =  Math.round(minutes * 4.25);
		var green =  Math.round(seconds * 4.25);

		if(colorOrder === 0){
			return([red, green, blue]);
		}
		else if(colorOrder === 1){
			return([blue, red, green]);
		}
		else if(colorOrder === 2){
			return([green, blue, red]);
		}
}