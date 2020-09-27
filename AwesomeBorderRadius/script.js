var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;


function observe_input_keypress(e,obj) {
	var code = e.charCode ? e.charCode : e.keyCode;
	if (obj.value == '' ){
		obj.value = 0;
	}
	if (! e.shiftKey && ! e.ctrlKey && ! e.altKey && ! e.metaKey && code != 46 && (code > 31 && (code < 48 || code > 57))) return false;
	return true;
}

function convertint(obj){
	if (obj.value == ''){
		obj.value = 0;
	}else{
		obj.value = parseInt(obj.value);
	}
	if (parseInt(obj.value) <= 100){
		obj.value = parseInt(obj.value);
	} else{
		obj.value = 100;
	}
	
	prepareBorderRadius();
}

function prepareBorderRadius(){
	var radius = parseInt(document.getElementById("tlt").value) + "% " 
				+ parseInt(document.getElementById("trt").value) + "% " 
				+ parseInt(document.getElementById("brt").value) + "% "
				+ parseInt(document.getElementById("blt").value) + "% / "
				+ parseInt(document.getElementById("tl").value) +  "% "
				+ parseInt(document.getElementById("tr").value) +  "% "
				+ parseInt(document.getElementById("br").value) + "% "
				+ parseInt(document.getElementById("bl").value) + "%";
	document.getElementById("code").value = "border-radius: " + radius + ";";
	document.getElementById("Component").style.borderRadius = radius;
}
window.addEventListener('DOMContentLoaded', (event) => {
    prepareBorderRadius();
	new ClipboardJS('.btn');
});