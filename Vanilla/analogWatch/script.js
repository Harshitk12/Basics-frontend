const hourHand=document.querySelector(".hour");
const minuteHand=document.querySelector(".minute");
const secondHand=document.querySelector(".second");

setInterval(()=>{
    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let hourRot=(hours%12)*30+minutes*0.5;
    let minuteRot = minutes * 6 + seconds * 0.1;
    let secondRot=seconds*6;
    hourHand.style.transform=`translate(-50%, -100%) rotate(${hourRot}deg)`;
    minuteHand.style.transform=`translate(-50%, -100%) rotate(${minuteRot}deg)`;
    secondHand.style.transform=`translate(-50%, -100%) rotate(${secondRot}deg)`;
    console.log(hours,minutes);
},1000);
