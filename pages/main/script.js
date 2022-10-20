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

//--------------Testimonials (карусель + popap)-----------------//
let range = document.querySelector(".slider");
let bodyTestimonials = document.querySelector(".slider__testimonials-row");
let widthRow = document.querySelector("#col-width");

range.addEventListener("input",function(event){
	let value = event.target.value;
	if(widthRow.clientWidth==264)	bodyTestimonials.style.left = -value*297 +"px";
	if(widthRow.clientWidth==289)	bodyTestimonials.style.left = -value*322 +"px";
})

// Popup
let columnsTesti = document.querySelectorAll(".column__slider");
let shadowPopap = document.querySelector(".main-wrapper");
let crossCrests = document.querySelectorAll(".column__slider-cross");
let crossMarks = document.querySelectorAll(".cross-mark");

for (let i = 0; i<columnsTesti.length;i++){

	columnsTesti[i].addEventListener("click",function(event){{
		columnsTesti[i].classList.add("active");
		document.querySelectorAll(".column__slider-text3")[i].classList.add("active");
		shadowPopap.classList.add("active");
		crossCrests[i].classList.add("active");

		if (event.target===crossMarks[i]){
			document.querySelectorAll(".column__slider-text3")[i].classList.toggle("active");
			columnsTesti[i].classList.toggle("active");
			shadowPopap.classList.toggle("active");
			crossCrests[i].classList.toggle("active");
		}
		}	

	}
	)

}

for(let i = 0; i<columnsTesti.length;i++){
	shadowPopap.addEventListener("click",function(event){
		if(event.target==document.querySelector(".main-wrapper")){
			crossCrests[i].classList.remove("active");
			columnsTesti[i].classList.remove("active");
			document.querySelectorAll(".column__slider-text3")[i].classList.remove("active");
			shadowPopap.classList.remove("active");
		}
	})
}

//--------------Pets (карусель)-----------------//

let items = document.querySelectorAll(".pets__body");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n){
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction){
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener("animationend", function(){
		this.classList.remove("active", direction);
	});
}

function showItem(direction){
	items[currentItem].classList.add("next", direction);
	items[currentItem].addEventListener("animationend", function(){
		this.classList.remove("next", direction);
		this.classList.add("active");
		isEnabled=true;
	});
}

function previousItem(n){
	hideItem("to-right");
	changeCurrentItem(n-1);
	showItem("from-left");
}

function nextItem(n){
	hideItem("to-left");
	changeCurrentItem(n+1);
	showItem("from-right");
}

document.querySelector(".pets__arrow-left").addEventListener("click", function(){
	if(isEnabled){
		let randomNumber = get6();
		previousItem(currentItem);
		for(let i = 5; i>=0;i--){
			blockPets[currentItem].children[i].outerHTML = allPets[randomNumber[i]].outerHTML;
		}
	}
})


document.querySelector(".pets__arrow-right").addEventListener("click", function(){
	if(isEnabled){
		let randomNumber = get6();
		nextItem(currentItem);

		for(let i = 5; i>=0;i--){
			blockPets[currentItem].children[i].outerHTML = allPets[randomNumber[i]].outerHTML;
		}
	}
})

//-------------------
let activePets = document.querySelectorAll(".pets__body .pet__body");
let active = document.querySelectorAll(".pets__body.active");
let blockPets = document.querySelectorAll(".pets__body");
let allPets = document.querySelectorAll(".pet__body");
let rightArrow = document.querySelector(".pets__arrow-right");

function get6(){
	let set = new Set();
	while(true){
		let random = Math.ceil(Math.random()*23);
		if(blockPets[currentItem].children[0].outerHTML==allPets[random].outerHTML||blockPets[currentItem].children[1].outerHTML==allPets[random].outerHTML||blockPets[currentItem].children[2].outerHTML==allPets[random].outerHTML||blockPets[currentItem].children[3].outerHTML==allPets[random].outerHTML||blockPets[currentItem].children[4].outerHTML==allPets[random].outerHTML||blockPets[currentItem].children[5].outerHTML==allPets[random].outerHTML) continue;
		set.add(random);
		let peks = Array.from(set);
		if(peks.length==6) break;
	}
	return Array.from(set);
}