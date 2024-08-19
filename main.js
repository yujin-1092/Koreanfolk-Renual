let slideWrapper = document.querySelector('.slide_wrapper');
let slideContainer = slideWrapper.querySelector('.slide_container');
let slide = slideContainer.querySelectorAll('li');
let slideCount = slide.length;
let currentIdx = 0;
let pager = slideWrapper.querySelector('.pager')
let pagerHTML ='';

slide.forEach((item,idx)=>{
  item.style.left = `${idx *100}%`;
  pagerHTML = pagerHTML + `<a href="#">${idx}</a>`;
});

pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll('a');
console.log(pagerHTML);