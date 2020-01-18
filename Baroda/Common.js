
function $(element){
	return document.getElementById(element);
}

function $click(element, func){
	$(element).addEventListener("click", func);
}

function $hideAll(tag) {
	var elements = document.getElementsByTagName(tag);
	for(var i =0; i <elements.length;i++)
		elements[i].style.display="none";
}

function $mapClickEvent(clName , func){
	let elements = document.getElementsByClassName(clName);
	for(var i =0; i <elements.length;i++){
		elements[i].addEventListener("click", func);
	}
}