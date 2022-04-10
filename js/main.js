const $headImage = document.querySelector('.fixed-header > .bg');
const $headTitle = document.querySelector('.fixed-header > .content > .title');

const headImageInitScale = 2

let headImageScaleDelta = headImageInitScale - 1
let headImageCurentScale = headImageInitScale
let titleCurentOpacity = 0
let titleCurentTransform = 0

const windowHeight = window.innerHeight

function setView(offset) {
    if (offset >= windowHeight && offset <= windowHeight * 2) {
        console.log(offset);
        headImageCurentScale = headImageInitScale - (headImageScaleDelta / windowHeight * (offset - windowHeight))
        titleCurentOpacity =  (offset - windowHeight) / 200
        titleCurentTransform = 0 - ((offset - windowHeight) / 2)

    } else if(offset <= windowHeight * 2) {
        headImageCurentScale = headImageInitScale
        titleCurentOpacity = 0
        titleCurentTransform = 0
        
    } else {
        headImageCurentScale = 1
        titleCurentOpacity = 50
        titleCurentTransform = windowHeight / 2 + 54
    }

    $headImage.style.cssText = `transform: scale(${headImageCurentScale})`
    $headTitle.style.cssText = `filter: blur(${titleCurentOpacity}px); transform: translateY(${titleCurentTransform}px)`
}

window.addEventListener('scroll', ()=> {
    setView(window.pageYOffset)
});