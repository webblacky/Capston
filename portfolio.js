	/*nav Bar mobile view*/
	var openImg = true;
	let IndexSlider = 0;
	let x = false;
	let nav = document.getElementsByTagName('nav')[0];
	let menuToggle = document.getElementsByClassName('menu-toggle')[0];
	menuToggle.addEventListener("click", function(){
		x = !x;
		if(x){
			let navBar = document.getElementsByClassName('bar')[0];
			navBar.classList.add('active');
			nav.classList.add('black');
		}
		else{
			let navBar = document.getElementsByClassName('bar')[0];
			navBar.classList.remove('active');
		}
	});
		/*show and hide the nav Bar*/
	let previousScroll = 100;
	window.addEventListener("scroll", function(){
		let currentScroll = document.getElementsByTagName("html")[0].scrollTop;
		console.log(currentScroll);
		if(currentScroll < 100 && openImg){
			nav.classList.remove('black');
			nav.style.display="block";
		}
		else{
				if (currentScroll > previousScroll) {
					nav.style.display="none";
				}
				else if((previousScroll - currentScroll)  > 100 ){
					nav.style.display="none";
				}
				else{ 
					if(openImg){
					nav.classList.add('black');
					nav.style.display="block";
					if(x){
						let navBar = document.getElementsByClassName('bar')[0];
						navBar.classList.remove('active');
						x = !x;
						}
				}
			}
				previousScroll = currentScroll;
		}
	});
	/*Gallery Image*/
	let galleryImages = document.querySelectorAll('.gallery-img');
	let getOpenImg;

	if(galleryImages){
		galleryImages.forEach(function(image,index){
			image.onclick = function(){
				console.log(openImg);
				openImg = !openImg;
				let nav = document.getElementsByTagName('nav')[0];
				nav.style.display="none";
				let getElementCss = window.getComputedStyle(image);
				let fullImageURl = getElementCss.getPropertyValue("background-image");
				let getUrlPos = fullImageURl.split("/Thumbnail/");
				let  setNewImg = getUrlPos[1].replace('")','');
				console.log(setNewImg);

				getOpenImg = index + 1;

				let container = document.body;
				let newIamgeWindow = document.createElement("div");
				let whiteBoard = document.createElement("div");
				container.appendChild(newIamgeWindow);
				newIamgeWindow.appendChild(whiteBoard);
				whiteBoard.setAttribute('class', 'whiteWindow');
				newIamgeWindow.setAttribute("class", "img-window");
				newIamgeWindow.setAttribute("onclick", "CloseImg()");
				newIamgeWindow.setAttribute("keypress", "CloseImgE(e)");


					let newImageOpen = document.createElement("img");
					newIamgeWindow.appendChild(newImageOpen);
					newImageOpen.setAttribute("src", "images/"+setNewImg);
					newImageOpen.setAttribute("id","current-img");

					newImageOpen.onload = function(){
						let nav = document.getElementsByTagName('nav')[0];
						nav.style.display="none";

						let newNextBtn = document.createElement("a");
						let newNextText = document.createTextNode("Next");
						container.appendChild(newNextBtn);
						newNextBtn.appendChild(newNextText);
						newNextBtn.setAttribute("class", "img-btn-next");
						newNextBtn.setAttribute("onclick", "changeImg(1)");
						newNextBtn.style.right = 4 + "vw";

						let newPrevBtn = document.createElement("a");
						let newPrevText = document.createTextNode("Prev");
						container.appendChild(newPrevBtn);
						newPrevBtn.appendChild(newPrevText);
						newPrevBtn.setAttribute("class", "img-btn-prev");
						newPrevBtn.setAttribute("onclick", "changeImg(-1)");
						newPrevBtn.style.left = 5 + "vw";

						let newCloseBtn = document.createElement("a");
						let newCloseText = document.createTextNode("X");
						container.appendChild(newCloseBtn);
						newCloseBtn.appendChild(newCloseText);
						newCloseBtn.setAttribute("class", "img-btn-close");
						newCloseBtn.setAttribute("onclick", "CloseImg()");
						newCloseBtn.style.top = 7 + "vh";


					}
			};

		});
	}
	function CloseImgE(e){
		console.log(e);
		if(e.keyCode == 13){
			alert("sdaf");
		}
	}
	function CloseImg(){
		document.querySelector('.img-window').remove();
		document.querySelector('.img-btn-next').remove();
		document.querySelector('.img-btn-prev').remove();
		document.querySelector('.img-btn-close').remove();
		openImg = !openImg;
	}

	function changeImg(changeDir){
		document.querySelector('#current-img').remove();

		let getImageWindow = document.querySelector(".img-window");
		let newImg = document.createElement("img");
		getImageWindow.appendChild(newImg);

		let calNewImg;
		if(changeDir === 1){
			calNewImg = getOpenImg + 1;
			if(calNewImg > galleryImages.length){
				calNewImg = 1;
			}
		}
		else if(changeDir === -1){
			calNewImg = getOpenImg - 1;
			if(calNewImg < 1){
				calNewImg = galleryImages.length;
			}
		}
		newImg.setAttribute("src", "images/0" + calNewImg +".jpg");
		newImg.setAttribute("id","current-img");
		getOpenImg = calNewImg;
		}

		/*Slider in Header*/
		setInterval(function(){ plusSlides(IndexSlider + 1) }, 5000);
		function func1(ind){
			let backGround = document.querySelector('.slider');
			backGround.style.backgroundImage = "linear-gradient(to bottom ,rgba(0,0,0,.5),rgba(0,0,0,.8)), url(images/b" + ind +".jpg)"
			
			let button = document.querySelectorAll(".dots button");
			button.forEach(function(btn){
				btn.classList.remove("active");
			});
			button[ind-1].classList.add("active");
		}
		let plusSlide = 1;
		function plusSlides(ind){
			plusSlide += ind;
			if(plusSlide > 3){
				plusSlide = 1;
				IndexSlider = 1;
			}
			else if(plusSlide < 1){
				plusSlide = 3;
				IndexSlider = 3;
			}
			let backGround = document.querySelector('.slider');
			backGround.style.backgroundImage = "linear-gradient(to bottom ,rgba(0,0,0,.5),rgba(0,0,0,.8)), url(images/b" + plusSlide +".jpg)"
			let button = document.querySelectorAll(".dots button");
			button.forEach(function(btn){
				btn.classList.remove("active");
			});
			button[plusSlide-1].classList.add("active");
			
		}
