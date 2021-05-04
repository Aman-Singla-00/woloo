

b1=document.getElementById("radio")

b1.addEventListener("click", function(){
	rb=document.querySelector('input[name="gender"]:checked').value;
	if(rb==null){return;}
	console.log(rb);
	FB.AppEvents.logEvent(`Gender${rb}`);

});

document.getElementById('chb').onclick = function() {  
  var markedCheckbox = document.getElementsByName('vehicle');  
  chv=""
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked)  
      chv=chv+checkbox.value + '\n';  
  }  
  console.log(chv);
  FB.AppEvents.logEvent(`Vehicle${chv}`);
}


b2=document.getElementById("ip")
b2.addEventListener("click", function(){
	inp=document.getElementById('inp');
	console.log(inp.value); 
	inp.value="";
});

img1=document.getElementById("i1");
img2=document.getElementById("i2");
img3=document.getElementById("i3");

img1.addEventListener("click", function(){
	console.log(img1.name); 
});
img2.addEventListener("click", function(){
	console.log(img2.name); 
});
img3.addEventListener("click", function(){
	console.log(img3.name); 
});