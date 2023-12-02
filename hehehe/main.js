const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const YesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

YesBtn.addEventListener("click", ()=>{
    question.innerHTML = "Aaaaaa, I like you tuuuuu";
    gif.src =
     "https://i.pinimg.com/564x/78/c2/a1/78c2a1bc33c3b551c75f5f34c4a9d764.jpg";

});

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});