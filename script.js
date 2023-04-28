// Randomly pick an item from the list and display it
function pickRandom() {
	var items = document.querySelectorAll("#list li");
	var index = Math.floor(Math.random() * items.length);

	// Get the text corresponding to the randomly picked item
var text;
var additionalImgSrc;
switch (index) {
	case 0:
		imgSrc = "images/himeko.png";
		text = "Himeko";
		additionalImgSrc = "images/himeko2.png";
		break;
	case 1:
		imgSrc = "images/welt.png";
		text = "Welt";
		additionalImgSrc = "images/welt2.png";
		break;
	case 2:
		imgSrc = "images/danheng.png";
		text = "Dan Heng";
		additionalImgSrc = "images/danheng2.png";
		break;
	case 3:
		imgSrc = "images/march.png";
		text = "March 7th";
		additionalImgSrc = "images/march2.png";
		break;
	case 4:
		imgSrc = "images/bronya.png";
		text = "Bronya";
		additionalImgSrc = "images/bronya2.png";
		break;
	case 5:
		imgSrc = "images/jingyuan.png";
		text = "Jing Yuan";
		additionalImgSrc = "images/jingyuan2.png";
		break;
	default:
		imgSrc = "images/Artwork_Trailblazer_05-04-2022.jpg";
		text = "Try Again!";
		break;
}

// Create image elements and set their sources
	var container = document.createElement("div");
	container.style.position = "relative";
	container.style.display = "inline-block";
	
	var img = document.createElement("img");
	img.src = imgSrc;
	img.style.position = "relative";
	img.style.zIndex = "1";
	container.appendChild(img);
	
	var additionalImg = document.createElement("img");
	additionalImg.src = additionalImgSrc;
	additionalImg.style.position = "absolute";
	additionalImg.style.bottom = "10%";
	additionalImg.style.right = "15%";
	additionalImg.style.zIndex = "2";
	container.appendChild(additionalImg);

	// Create a paragraph element and set its text content
	var paragraph = document.createElement("p");
	paragraph.textContent = text;

	// Clear any previous result and display the new result
	var result = document.getElementById("result");
	result.innerHTML = "";
	result.appendChild(container);
	result.appendChild(paragraph);
	result.style.display = "block";
	document.getElementById("popup-container").style.display = "flex";
}

// Close the popup window and go back to the original page
function closePopup() {
	document.getElementById("result").style.display = "none";
	document.getElementById("popup-container").style.display = "none";
}

// Attach event listeners to the "Pick" and "Close" buttons
document.getElementById("pick-button").addEventListener("click", pickRandom);
document.getElementById("close-button").addEventListener("click", closePopup);