const warpper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "I love you too!"
    gif.src=
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjIwMngyNGVkdWVpYXU0ODF3OHF0MG5hdGx0OXZ3Ym15OXNoaXVtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZqJluzSMPVO3PtES8i/giphy.gif"
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    

})