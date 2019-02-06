class Carousel {
  constructor(car) {
    this.car = car;

    //Bringing everything that I will need from the DOM
    this.leftBtn = this.car.querySelector('.left-button');
    this.rightBtn = this.car.querySelector('.right-button');
    this.imgList = this.car.querySelectorAll('.card');

    //Setting initial starting point
    this.index = 0;
    this.imgList[this.index].style.display="block";
    
    this.leftBtn.addEventListener("click", () => this.cycleLeft());
    this.rightBtn.addEventListener("click", () => this.cycleRight());
  }
  //Methods for cycling through the content array
  cycleLeft() {
		this.imgList[this.index].style.display = 'none';
		this.index === 0 ? this.index = this.imgList.length - 1 : this.index--;
		this.imgList[this.index].style.display = 'block';
	}

	cycleRight() {
		this.imgList[this.index].style.display = 'none';
		this.index === this.imgList.length - 1 ? this.index = 0 : this.index++;
		this.imgList[this.index].style.display = 'block';
	}
}

//Defining and acquiring my carousel
let carousel = document.querySelectorAll('.carousel');
carousel.forEach( car => new Carousel(car));