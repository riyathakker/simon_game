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
function checkans(){
    let i = level -1;
    if(user[i] === game[i]){
        console.log("Same");
    }else{
        h2.innerText = `Game over!! Press any key to start new game`;
        console.log("Different");
    }
}
function userinput(){
    let btn=this;
    buttonflash(btn);
    usercolor= btn.getAttribute("id");
    user.push(usercolor);
    
    checkans();
}
for(b of btn){
    b.addEventListener("click",userinput)
}