//------------------Burger---------------------//
let humb = document.querySelector(".hamburger");
let humbline = document.querySelector(".hamburger-line");
let menu = document.querySelector(".menu__header");
let shadow = document.querySelector(".shadow");
humb.addEventListener("click",function(){
	humb.classList.toggle("active");
	humbline.classList.toggle("active");
	menu.classList.toggle("active");
	shadow.classList.toggle("active");
})

shadow.addEventListener("click", function(event){
	if(event.target==document.querySelector(".shadow.active")) {
		humb.classList.toggle("active");
		humbline.classList.toggle("active");
		menu.classList.toggle("active");
		shadow.classList.toggle("active");
	}
})

//------------------COST PANDS--------------------------//
let number = document.querySelector(".donate__form-input");
let labels = document.querySelectorAll(".radio__main-label");
let inpunts = document.querySelectorAll(".radio__main-input");

number.addEventListener("input", function(event){
	console.log(this.value);
	const max = 9999;
	if(+this.value>max) this.value=max;
	for(let i = 0;i<labels.length;i++){
		if(this.value==labels[i].innerHTML){
		inpunts[i].checked=true;
	} else{
		inpunts[i].checked=false;
	}
	}
})

for(let i = 0; i<inpunts.length;i++){
	inpunts[i].addEventListener("click",function(event){
		console.log(this);
		number.value = +labels[i].innerHTML;
	})
}