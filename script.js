

b1=document.getElementById("radio")

b1.addEventListener("click", function(){
	rb=document.querySelector('input[name="gender"]:checked').value;
	if(rb==null){return;}
	console.log(rb);
	FB.AppEvents.logEvent("Gender",1,rb);
});

document.getElementById('chb').onclick = function() {  
  var markedCheckbox = document.getElementsByName('vehicle');  
  chv=""
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked)  
      chv=chv+checkbox.value;  
  }  
  console.log(chv);
  FB.AppEvents.logEvent(`Vehicle${chv}`);
}
function chbf(p){
	var params = {};
	for(i=0;i<p.length;i++){
		params['Vehicle'+i]=p[i];
	}
    FB.AppEvents.logEvent('Vehicles', 2, params);
}


b2=document.getElementById("ip")
b2.addEventListener("click", function(){
	inp=document.getElementById('inp');
	console.log(inp.value); 
	FB.AppEvents.logEvent("Text",3,inp);
	inp.value="";
});

img1=document.getElementById("i1");
img2=document.getElementById("i2");
img3=document.getElementById("i3");

img1.addEventListener("click", function(){
	console.log(img1.name); 
	var params = {};
	params["Fruit"]=img1.name;
	FB.AppEvents.logEvent("Fruits liked",4,params);

});
img2.addEventListener("click", function(){
	console.log(img2.name); 
	var params = {};
	params["Fruit"]=img2.name;
	FB.AppEvents.logEvent("Fruits liked",4,params);
});
img3.addEventListener("click", function(){
	console.log(img3.name); 
	var params = {};
	params["Fruit"]=img3.name;
	FB.AppEvents.logEvent("Fruits liked",4,params);
});