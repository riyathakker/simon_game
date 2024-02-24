const audioFiles = {
    red: 'audio/red.mp3',
    blue: 'audio/blue.mp3',
    yellow: 'audio/yellow.mp3',
    green: 'audio/green.mp3'
};
const audioElements = {};
for (const color in audioFiles) {
    const audio = new Audio(audioFiles[color]);
    audioElements[color] = audio;
}

let game=[];
let user=[];

let btns = ["red","yellow","green","blue"];

let level = 0 ;

let start=false;

let btn = document.querySelectorAll('.btn');
let h2=document.querySelector('h2');
document.addEventListener("keydown",function(event){
    //game start
    if(start==false){
        start = true;
        levelincrease();
    }
});
function buttonflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    }, 300);
}

function levelincrease(){
    user =[];
    level++;
    h2.innerText=`You are on Level ${level}`;
    //random button
    let randomindex = Math.floor(Math.random()* 3);
    let randomcolor = btns[randomindex];
    let randombutton = document.querySelector(`.${randomcolor}`);
    game.push(randomcolor);
    //button flash
    buttonflash(randombutton);

}

function checkans(i){
    if(user[i] === game[i]){
        if(user.length == game.length){
           setTimeout( levelincrease,300);
        }
    }else{
        h2.innerHTML = `Game over!! Your score is ${(level-1)*100} <br>Press any key to start new game`;
        document.querySelector("body").style.backgroundColor ="#FF7F7F";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor ="white";
        }, 1500);
        reset();
    }
}
function userinput() {
    let btn = this;
    let usercolor = btn.getAttribute("id");
    buttonflash(btn);
    user.push(usercolor);
    playAudio(usercolor); // Play corresponding audio
    checkans(user.length - 1);
}

function playAudio(color) {
    audioElements[color].currentTime = 0; // Reset audio to start if already playing
    audioElements[color].play();
}

for(b of btn){
    b.addEventListener("click",userinput)
}
function reset(){
    start = false;
    game=[];
    user=[];
    level = 0;
}