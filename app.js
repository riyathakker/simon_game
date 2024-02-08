let game=[];
let user=[];
let level = 0 ;
let start=false;

let h2=document.querySelector('h2');
document.addEventListener("keydown",function(event){
    //game start
    if(start==false){
        console.log("Game start");
        start = true;
        levelincrease();
    }
})
function levelincrease(){
    level++;
    h2.innerText=`You are on Level ${level}`;
    buttonflash();

}
function buttonflash(){

}