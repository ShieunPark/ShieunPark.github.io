function popup() {
  open("Superman.html");
}

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("Bulb_on.png")) {
	image.src = "Bulb_off.png";
  }
  else {
	image.src = "Bulb_on.png";
  }
}
