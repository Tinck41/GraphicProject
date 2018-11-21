var box = document.getElementById("num1");
var box2 = document.getElementById("num2");
var box3 = document.getElementById("num2");




function Right(symbol) {
	if (box.value == "Dark Souls 2") {
		document.getElementById('1').textContent = "Вы абсолютно правы!";
		document.getElementById('sc1').style.backgroundImage = 'url(1.1Right.jpg)';
		box.value = "";
	} else {
		document.getElementById('1').textContent = "Вы не правы((";
		box.value = "";
	}
}

function Right2(symbol) {
	if (box2.value == "Shameless") {
		document.getElementById('2').textContent = "Вы абсолютно правы!";
		document.getElementById('sc2').style.backgroundImage = 'url(2.2Right.jpg)';
		box2.value = "";
	} else {
		document.getElementById('2').textContent = "Вы не правы((";
		box2.value = "";
	}
}

function Right2(symbol) {
	if (box3.value == "Непутёвый ученик в школе магии") {
		document.getElementById('3').textContent = "Вы абсолютно правы!";
		document.getElementById('sc3').style.backgroundImage = 'url(3.3Right.jpg)';
		box2.value = "";
	} else {
		document.getElementById('3').textContent = "Вы не правы((";
		box2.value = "";
	}
}