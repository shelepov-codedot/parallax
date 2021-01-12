const card = document.querySelector('.card')
const cardFront = document.querySelector('.card-front')
const cardBack = document.querySelector('.card-back')

const doFlip = () => card.classList.toggle("card-flip")
card.addEventListener('click', doFlip);

card.addEventListener('click', function() {
    if(card.classList.contains('card-flip')){
        cardFront.style.transform = "rotateX(180deg)"
        cardBack.style.transform = "rotateX(360deg)"
    } else {
        cardFront.style.transform = "rotateX(0deg)"
        cardBack.style.transform = "rotateX(180deg)"
    }
})

let timerLeave;

const mouseleave = () => {
    timerLeave = setTimeout(rotateOut, 3000)
}

function rotate(event) {
    const cardItem = this.querySelector('.card-item');
    const cardBg = this.querySelector('.card-img')
    const cardBgBack = this.querySelector('.card-img__back')
    const centerCard = cardItem.offsetHeight / 2;

    const cardX = (-(event.offsetY - centerCard) / 10);
    const cardY = ((event.offsetX - centerCard) / 10);

    const imgX = (-(event.offsetY - centerCard) / 5);
    const imgY = ((event.offsetX - centerCard) / 5);
    
    cardBg.style.transform = `translateX(${imgX}px) translateY(${imgY}px) scale(1.2)`;
    cardBgBack.style.transform = `translateX(${imgX}px) translateY(${imgY}px) scale(1.2)`;
    cardItem.style.transform = `rotateX(${cardX}deg) rotateY(${cardY}deg)`;
}

function rotateOut(event) {
    const cardItem = card.querySelector('.card-item');
    cardItem.style.transform = "rotateX(0deg) rotateY(0deg)";
}



card.addEventListener('mousemove', rotate)
card.addEventListener('mouseleave', mouseleave)

