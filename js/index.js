const slide = document.querySelector(".ban_item");
const item_slide = document.querySelectorAll(".ban_item .ban_i_group");
console.log("check 3 ",item_slide)
const arrow_btn = document.querySelectorAll(".arrow .fa-solid");

var currentIndexOfItem = 0;
function slider() {
    currentIndexOfItem = (currentIndexOfItem + 1 <= item_slide.length - 1) ? currentIndexOfItem + 1 : 0;
    slide.style.transform = `translateX(${-item_slide[currentIndexOfItem].offsetLeft}px)`;
}

arrow_btn[0].onclick = () => {
    currentIndexOfItem = (currentIndexOfItem - 1 >=0) ? currentIndexOfItem - 1 : item_slide.length - 1;
    
    slide.style.transform = `translateX(${-item_slide[currentIndexOfItem].offsetLeft}px)`;
}

arrow_btn[1].onclick = () => {
  
    currentIndexOfItem = (currentIndexOfItem + 1 <= item_slide.length - 1) ? currentIndexOfItem + 1 : 0;
 
    slide.style.transform = `translateX(${-item_slide[currentIndexOfItem].offsetLeft}px)`;
}

let id = setInterval(() => {
   slider()
},4000)

window.addEventListener("unload",() => {
    clearInterval(id);
    
})

setInterval(() => {
    document.documentElement.style.setProperty('--animate__heartBeat', '2s');
},2000)


const bannr_l = document.getElementById("bannr_l");
const bannr_r = document.getElementById("bannr_r");
window.addEventListener("scroll",() => {
     bannr_l.style.display = window.scrollY >= 400 ? "block" : "none"
     bannr_r.style.display = window.scrollY >= 400 ? "block" : "none"
})


const container_deal_img = document.querySelector(".container_deal_img")
const deal_img_item = document.querySelectorAll(".container_deal_img .deal_img_item");
const arrow_deal = document.querySelectorAll(".arrow");
console.log("check 50 ",arrow_deal)
let currentIndexOfDeal = 2;

function sliderDeal() {
    currentIndexOfDeal = (currentIndexOfDeal + 1 <= deal_img_item.length - 3) ? currentIndexOfDeal + 1 : 0;
    container_deal_img.style.transform = `translateX(${-deal_img_item[currentIndexOfDeal].offsetLeft}px)`;
}
setInterval(() => {
    sliderDeal()
},4000)

arrow_deal[1].addEventListener("click",() => {
    
})

arrow_deal[2].addEventListener("click",() => {
    console.log(2)
})


