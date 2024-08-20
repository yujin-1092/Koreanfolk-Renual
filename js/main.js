let slideWrapper = document.querySelector('.slide_wrapper');
let slideContainer = slideWrapper.querySelector('.slide_container');
let slide = slideContainer.querySelectorAll('li');
let slideCount = slide.length;
let currentIdx = 0;
let pager = slideWrapper.querySelector('.pager')
let pagerHTML ='';


// main banner 페이저
slide.forEach((item,idx)=>{
  item.style.left = `${idx *100}%`;
  pagerHTML = pagerHTML + `<a href="#">${idx}</a>`;
});

pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll('a');
console.log(pagerHTML);



// 스크롤
const scrollTopBtn = document.querySelector('.scroll');
const arrowIcon = scrollTopBtn.querySelector('.fa-chevron-down');

// 스크롤 감지
window.addEventListener('scroll',()=>{
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add('topMode');
    scrollTopBtn.innerHTML = 'Top <i class="fa-solid fa-chevron-down"></i>';
  } else {
    scrollTopBtn.classList.remove('topMode');
    scrollTopBtn.innerHTML = 'Scroll <i class="fa-solid fa-chevron-down"></i>';
  }
});

// TOP이 클릭됐을 때 상단으로 스크롤
scrollTopBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

//원스크롤 원페이지
window.addEventListener('wheel',(e)=>{
  e.preventDefault();
  if(screenY > 0){
    window.scrollTo({
      
    })
  }
})