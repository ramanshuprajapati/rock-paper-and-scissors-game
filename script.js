let userChoose = document.querySelector('#user-choice');
let computerChoose = document.querySelector('#computer-choice');
let result = document.querySelector('#result');
let option = document.querySelector('#choices')
let compChoose;

const cChoose = () => {
    let arr = ["rock","paper","scissors"];
    let data = Math.floor(Math.random()*3);
    return  arr[data]
    
    
}
 


option.addEventListener('click',function(dts){


const drawGame = () => {
    result.textContent = `It's a draw!`
}


const userwin = () => {
    result.textContent = "You win! ";
}

const compwin = () => {
    result.textContent = "Computer wins!"
}
let uchoose = dts.target.id;
 compChoose = cChoose();
 userChoose.textContent = uchoose;
 computerChoose.textContent = compChoose;

 console.log(uchoose);
 console.log(compChoose);
 
 if(uchoose == compChoose){
    drawGame()
 }else if(uchoose == "rock"){
    if(compChoose == "scissors"){
        userwin()
    }else{
        compwin()
    }
 }else if(uchoose == "paper"){
    if(compChoose == "rock"){
        userwin()
    }else{
        compwin()
    }
 }else if(uchoose == "scissors"){
    if(compChoose == "paper"){
        userwin()
    }else{
        compwin()
    }
 }

 


})