
function picturechange (color)
{	if (color=='purple') {
	document.getElementById("changepillow").src="purplepillow.jpg" 
}
	if (color == 'green') {
	document.getElementById("changepillow").src="green pillows.jpeg" 
	}
	if (color == 'blue') {
		document.getElementById("changepillow").src="bluepillows.jpg" 
	}

	if (color == 'yellow')
		document.getElementById("changepillow").src="yellowpillows.jpg" 
} 

var imagetracker="u";

function stuffingclick1 ()
{	
	var image = document.getElementById("changestuffing1");
	if (imagetracker=="u") {
		image.src="clickedduckdown.jpg";
		imagetracker="c";
	} else{
		image.src="duckdown.jpg";
		imagetracker="u";
	}
} 

function stuffingclick2 ()
{
	{	
	var image = document.getElementById("changestuffing2");
	if (imagetracker=="u") {
		image.src="clickedmemory.jpg";
		imagetracker="c";
	} else{
		image.src="memoryfoam.jpg";
		imagetracker="u";
	}
} 

} 

function stuffingclick3 ()
	{	
	var image = document.getElementById("changestuffing3");
	if (imagetracker=="u") {
		image.src="clickhypo.jpg";
		imagetracker="c";
	} else{
		image.src="hypo.jpg";
		imagetracker="u";
	}

} 

function clickedcouch ()
{
	document.getElementById("showclick1").src="selectedcouch.jpg" 
} 

function clickedbed ()
{
	document.getElementById("showclick2").src="selectedbed.jpg" 
} 

function clickedround ()
{
	document.getElementById("showclick3").src="selectedround.jpg" 
} 

function clickedpouf ()
{
	document.getElementById("showclick4").src="selectedpouf.jpg" 
} 

function addcart ()
{
	document.getElementById("cart").src="addedcart.jpg"
}

function makenewpillow ()
{
	document.getElementById("new").src="makenew.jpg"
}


function gotocart(url) {
    window.location = url;
}

/*Attempt for add to cart feature

var Item=function(name, color, count){
	this.name=name
	this.color=color
	this.count=count
}

function addItemToCart(name, color, count){
	var item=newItem(name, color, count);
	cart.push(item);
}
*/

/*Attempt at removing items from cart

var removeCartItemButtons = document.getElementsByClassName('removebutton')
//for (var i=0; i<removeCartItemButtons.length; i++){
	//var button = removeCartItemButtons[i]
	button.addEventListener('click', function(event){
		var buttonClicked = event.target
		buttonClicked.parentElement.remove()
	}


*/







