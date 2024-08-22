// 페이저
document.addEventListener('DOMContentLoaded', function() {
  let slideWrapper = document.querySelector('.slide_wrapper');
  let slideContainer = slideWrapper.querySelector('.slide_container');
  let slides = slideContainer.querySelectorAll('li');
  let pager = slideWrapper.querySelector('.pager');
  let slideCount = slides.length;
  let currentIdx = 0;
  let pagerHTML = '';
  let autoPlayInterval;




//쿠키
const popup = document.querySelector('.popup');
const check = document.querySelector('#check');
const button = document.querySelector('.popup button');

button.addEventListener('click',()=>{
  if(check.checked){
    //쿠키생성
    setCookie('Company','ABC',1);
  } else{
    //쿠키제거
    delCookie('Company','ABC');
  }
  popup.classList.remove('show');
});

function setCookie(name,val,due){
  let date = new Date();
    date.setDate(date.getDate() + due);

    let myCookie = `${name}=${val};expires=`+date.toUTCString();
    document.cookie = myCookie;
}

function delCookie(name,val){
  let date = new Date();
    date.setDate(date.getDate() -1);

    let myCookie = `${name}=${val};expires=`+date.toUTCString();
    document.cookie = myCookie;
}

//Company=ABC, checkCookie
function checkCookie(name,val){
  if(document.cookie.search(`${name}=${val}`) === -1){
    popup.classList.add('show');
  }
}

checkCookie('Company','ABC');



// 자동 슬라이드 6초
const autoPlayDelay = 6000;

slides.forEach((item, idx) => {
  item.style.left = `${idx * 100}%`;
  pagerHTML += `<a href="#" data-slide="${idx}">${idx + 1}</a>`;
});

pager.innerHTML = pagerHTML;
let pagerBtns = pager.querySelectorAll('a');

// 페이저로 슬라이드 이동
function goToSlide(idx) {
  slideContainer.style.transform = `translateX(-${idx * 100}%)`;
  currentIdx = idx;
  updatePager(idx);
}

// 페이저 버튼
function updatePager(idx) {
  pagerBtns.forEach((btn, i) => {
    if (i === idx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 자동 슬라이드
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    let nextIdx = (currentIdx + 1) % slideCount;
    goToSlide(nextIdx);
  }, autoPlayDelay);
}

// 자동 슬라이드 멈춤
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// 페이저 클릭 이벤트
pagerBtns.forEach((btn, idx) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    goToSlide(idx);
    stopAutoPlay(); 
    startAutoPlay(); 
  });
});

goToSlide(0);

startAutoPlay();
});


// 스크롤
const scrollTopBtn = document.querySelector('.scrolldown');
const arrowIcon = scrollTopBtn.querySelector('.fa-chevron-down');

const scrollY = window.scrollY
const menuSlider = document.querySelectorAll('.slide li')
const section = document.querySelectorAll('.section')


// 스크롤 감지
window.addEventListener('scroll',()=>{
if (scrollY > 100) {
  scrollTopBtn.classList.add('topMode');
  scrollTopBtn.innerHTML = 'Top <i class="fa-solid fa-chevron-down"></i>';
} else {
  scrollTopBtn.classList.remove('topMode');
  scrollTopBtn.innerHTML = 'Scroll <i class="fa-solid fa-chevron-down"></i>';
}
});

// TOP이 클릭됐을 때 상단으로 스크롤
scrollTopBtn.addEventListener('click', (e)=>{
e.preventDefault();
window.scrollTo({
  top: 0,
  behavior: 'smooth'
})
});



//메뉴 아코디언
const depth = document.querySelectorAll('.depth')
const subDepth = document.querySelectorAll('.sub_depth')

function menuAccordion (){

}
