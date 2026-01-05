const blocks=document.querySelectorAll(".block");
const win=document.querySelector(".win");
const line=document.querySelector(".line");

let curr="X";

blocks.forEach((block)=>{
    block.addEventListener("click",()=>{
        block.innerText=curr;
        check();
        curr=curr==="X"?"0":"X";
    })
})

const winCnd=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const check=()=>{
    for(const[a,b,c] of winCnd){
        let first=blocks[a].innerText;
        let second=blocks[b].innerText;
        let third=blocks[c].innerText;
        if(first===curr && second===curr && third===curr){
            win.innerText=curr+" Won !!!";
            drawLine(a,b,c);
            setTimeout(()=>{
                line.style.display="none";
                line.style.left="";
                line.style.top="";
                line.style.transform="";
                reset();
            },2000);
            
            break;
        }
    }
}

const reset=()=>{
    blocks.forEach((block)=>{
        block.innerText="";
    })
}

const lineCnd=[[0,0,1,2,-16],[0,3,4,5,-4],[0,6,7,8,8],[1,0,3,6,3.5],[1,1,4,7,10.5],[1,2,5,8,17.5],[2,0,4,8],[3,2,4,6]];
const drawLine=(a,b,c)=>{
    line.style.display="block"
    for(const [d,e,f,g,h] of lineCnd){
        if(e===a && b===f && c===g){
            if(d===0){
                line.style.top=`${h}vh`;
            }
            else if(d===1){
                line.style.transform="rotate(0deg)";
                line.style.left=`${h}vw`;
            }
            else if(d===2)
                line.style.transform="rotate(-50deg)";
            else{
                line.style.transform="rotate(50deg)";
            }
        }
    }
        
}