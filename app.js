const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelector('div').length

let activeSlide

sidebar.style.top = `-${(slidesCount-1) * 100}vh`


upBtn.addEventListener('click', () =>
{
    changesSlide('up')
})
downBtn.addEventListener('click', () => 
{
    changesSlide('down')
})

function changesSlide(direction)
{

}