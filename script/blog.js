const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));


$(document).ready(function(){
  $(".view_btn").click(function(){
    let butoni = $(this).attr("id").split("_")[1];
    
    if(butoni == 1){
      $(".showProduct").append(`<div class="container">
      <div class="row">
          <div class="col-md-6 me-2">
              <img src="Image/img/ora.png" width="200px">
          </div>
          <div class="col-md-5 align-center">
              <h3>Smarth whatch</h3>
              <h4>Xiaomi Haylou LS02 Smart Watch, Black</h4>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <h4>$55</h4>
          </div>
      </div>
  </div>`);
      $("#modalProduct").modal("show");
    }

    if(butoni == 2){
      $(".showProduct").append(`<div class="container">
      <div class="row">
          <div class="col-md-6 me-2">
              <img src="Image/img/iphone-13-Pro.png" width="200px">
          </div>
          <div class="col-md-5 align-center">
              <h3>Iphone 13 Pro</h3>
              <h4>Apple iPhone 13, 128GB, (PRODUCT) RED</h4>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <i class='bx bxs-star text-warning' ></i>
              <h4>$830</h4>
          </div>
      </div>
  </div>`);
      $("#modalProduct").modal("show");
    }

  if(butoni == 3){
    $(".showProduct").append(`<div class="container">
    <div class="row">
        <div class="col-md-6 me-2">
            <img src="Image/img/setDevices.png" width="200px">
        </div>
        <div class="col-md-5 align-center">
            <h3>Set of devices</h3>
            <h4>Set MS Gaming ELITE C500 4in1, (keyboard + mouse + mousepad + headphones)</h4>
            <i class='bx bxs-star text-warning' ></i>
            <i class='bx bxs-star text-warning' ></i>
            <i class='bx bxs-star text-warning' ></i>
            <i class='bx bxs-star text-warning' ></i>
            <i class='bx bxs-star text-warning' ></i>
            <h4>$45</h4>
        </div>
    </div>
</div>`);
    $("#modalProduct").modal("show");
  }
});

  $(".close").click(function(){
    $("#modalProduct").modal("hide");
    $(".showProduct").empty();
  });
});
  

