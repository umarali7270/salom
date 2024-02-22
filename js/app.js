let menuLogo = document.querySelector('.header-menu')
let x = document.querySelector('.menu-x')
let menu = document.querySelector('.menu')

menuLogo.addEventListener('click' , function(){
    menu.style.left = "0"
})
x.addEventListener('click' , function(){
    menu.style.left = "100%"
})
  

let bokmark = document.querySelectorAll('.features-link')
let featuresKard = document.querySelectorAll(".features-bottom")



bokmark.forEach(function(item , index){
    item.addEventListener('click' , function(){
        bokmark.forEach(function(item , index){
            featuresKard[index].classList.remove("active-features-bottom")
            item.classList.remove("active-features")
        })
        item.classList.add("active-features")
        featuresKard[index].classList.add("active-features-bottom")
    })
})


let questionsKardText = document.querySelectorAll(".questions-about-kard")
let questionsKardJs =document.querySelectorAll(".questions-kard-js-text")
let questionsKardJs2 = document.querySelectorAll(".questions-kard-js")
let questionsSvg = document.querySelectorAll(".question-svg")



questionsKardText.forEach(function(item , index){
    item.addEventListener('click' , function(){
        questionsKardJs2[index].classList.toggle("active-questions")
        questionsSvg[index].classList.toggle("active-question-svg")
    })
})