let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const cmpscr=document.querySelector("#comp-score");
const usrscr=document.querySelector("#user-score");
const options=["rock","paper","scissor"];
let gencompChoice=()=>{
    let randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const msg=document.querySelector("#msg");
const showWinner=(userwin)=>{
    if(userScore <4 && compScore<4)
    {
    if(userwin)
    { 
        usrscr.innerText=++userScore; 
          msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else
    {
        cmpscr.innerText=++compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
else
{
    if(userScore>compScore)
       { 
        usrscr.innerText=++userScore; 
        msg.innerText="You won tournament";
       }
    else
    {
        cmpscr.innerText=++compScore;
    msg.innerText="Comp won tournament";
    }
    
    userScore=0;
    usrscr.innerText=0;
    compScore=0;
    cmpscr.innerText=0;
}
}
const playGame=(userChoice)=>{
    let compChoice=gencompChoice();
    let userwin=false;
    if(userChoice===compChoice)
    {   
        msg.innerText="Draw";
        msg.style.backgroundColor="black";
    }
    else{
    if(userChoice==="rock" )
        userwin=compChoice==="scissor"?true:false;
    else if(userChoice==="paper")
        userwin=compChoice==="rock"?true:false;
    else
        userwin=compChoice==="paper"?true:false;
    showWinner(userwin);
    }
}
const handleClick = (event) => {
    const choiceId = event.target.getAttribute("id");
    playGame(choiceId);
}
choices.forEach((value) =>{
    value.addEventListener("click",handleClick);
})


