// Tab clicked ============================================
const tabsBtn = document.querySelectorAll(".btn--tab--nav");
const tabsContent = document.querySelectorAll(".tabs__content__text");

tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
       let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains("active")){
            tabsBtn.forEach(function(item){
            item.classList.remove("active");
        });

        tabsContent.forEach(function(item){
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
        }

    })
});

document.querySelector(".btn--tab--nav").click();


// Всплывающее окно ============================================

const intro__btn = document.getElementById('intro__btn');
const introNewWindow = document.querySelector("#intro__newWindow");

// intro__btn.addEventListener("click", function(){
//   if (!introNewWindow.classList.contains('wind_active')){
//     introNewWindow.classList.remove('none');
//     introNewWindow.classList.add('wind_active');
//   }else if (!introNewWindow.classList.contains('hide')){
//     introNewWindow.classList.add('hide');
//     introNewWindow.classList.add('none');
//   }else if (introNewWindow.classList.contains('wind_active') && introNewWindow.classList.contains('hide') && introNewWindow.classList.contains('none')){
//     introNewWindow.classList.remove('none');
//     introNewWindow.classList.remove('hide');
//   }
// });



intro__btn.addEventListener("click", function(){
  if(!introNewWindow.classList.contains('wind_active')){
    introNewWindow.classList.add('wind_active');
  }else if(introNewWindow.classList.contains('wind_active')){
       introNewWindow.classList.remove('wind_active');
       introNewWindow.classList.add('hide');
       setTimeout(function(){
        introNewWindow.classList.remove('hide');
      }, 500);
  }
});

// Плавный скролл ============================================

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('#header').offsetHeight;

      if(burgerMenu.classList.contains('__active')){
        document.body.classList.remove('__lock');
        burgerMenu.classList.remove('__active');
        navMenu.classList.remove('nav__active');
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
     
      e.preventDefault();
    }
  }
}

//=============================


// let links = document.querySelectorAll('[href^="#"]');
//     let speed = 0.4;

//     links.forEach(link => {
//         link.addEventListener('click', function(event){
//             event.preventDefault();

//             let witdhTop = document.documentElement.scrollTop;
//             let hash = this.hash;
//             let toBlock = document.querySelector(hash).getBoundingClientRect().top;
//             let start = null;

//             requestAnimationFrame(step);

//             function step(time) {
//                 if (start === null) {
//                     start = time;
//                 } 

//                 let progress = time - start;
//                 let r = (toBlock < 0 ? Math.max(witdhTop - progress / speed, witdhTop + toBlock) : Math.min(witdhTop + progress / speed, witdhTop + toBlock));

//                 document.documentElement.scrollTo(0, r);

//                 if (r != witdhTop + toBlock) {
//                     requestAnimationFrame(step);
//                 } else {
//                     location.hash = hash;
//                 }
//             };
//         });
//     });


// фиксированное меню ============================================

const header = document.querySelector('#header');
const intro = document.querySelector('#intro');
const headerInner = document.querySelector('#header__inner');
const headerHeight = header.offsetHeight;
const introHeight = intro.offsetHeight;
let lastScrollTop = 0;

function headerFix() {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= introHeight + headerHeight){
    header.classList.add('header__fixed');
    headerInner.classList.add('header__innerFix');
    intro.style.marginTop = '56px';

  }else{
    header.classList.remove('header__fixed');
    headerInner.classList.remove('header__innerFix');
    intro.style.marginTop = '0px';
  }
}


headerFix();
window.addEventListener('scroll', function(){
  headerFix();
});


// Бургер меню ============================================


const burgerMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
if (burgerMenu){
  
  burgerMenu.addEventListener('click', function(e){
    document.body.classList.toggle('__lock');
    burgerMenu.classList.toggle('__active');
    navMenu.classList.toggle('nav__active');
  });


};


// Появление элементов ============================================





// Проверка форм ============================================

function checkForm(el){

  var name = el.name.value;
  var email = el.email.value;
  var subject = el.subject.value;
  var message = el.message.value;

  var fail = "";

  if(name == "" || email == "" || subject == "" || message == ""){
    fail = "Заполните все поля!";
  }else if(name.length <= 1 || name.length > 50) {
    fail = "Введите корректное имя!";
  }


  if (fail != ""){
    document.getElementById("error").innerHTML = fail;
    return false;
  }else{
    alert("Все данные корректно заполнены!");
    window.location = "https://www.google.com/";
    return false;
  }

}
