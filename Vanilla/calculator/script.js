let inputExp="";

const buttons=document.querySelectorAll(".button");
const inputBar=document.querySelector("#inputBar");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerText==="="){
            inputBar.value=calculate(inputExp);
            inputExp="";
        }
        else{
            inputExp+=button.innerText;
            inputBar.value=inputExp;
        }
    })
})

const calculate=(exp)=>{
    let i;
    for(i=0;i<exp.length;i++){
        if(!Number.isInteger(Number(exp[i]))){
            break;
        }
    }
    let opr=exp[i];
    let nums=exp.split(opr);
    let ans;
    if(opr==="+") ans=Number(nums[0])+Number(nums[1]);
    else if(opr==="-") ans=Number(nums[0])-Number(nums[1]);
    else if(opr==="x") ans=Number(nums[0])*Number(nums[1]);
    else if(opr==="/") ans=Number(nums[0])/Number(nums[1]);
    else ans="error";
    return ans;
}