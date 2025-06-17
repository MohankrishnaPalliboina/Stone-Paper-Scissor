let scissor=document.querySelector("#scissor");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let message=document.querySelector("#msg");
let yc=document.querySelector("#yc");
let cc=document.querySelector("#cc");
let res=document.querySelector(".res");
let cha=0;
let y=0;
let c=0;
scissor.onclick=()=>{
    cha=1;
    calc(cha);
}
rock.onclick=()=>{
    cha=2;
    calc(cha);
}
paper.onclick=()=>{
    cha=3;
    calc(cha);
}
function calc(ch){
    console.log(ch);
    cp=Math.floor(Math.random()*3);
    console.log(cp);
if(cp===ch){
message.innerText="You won the match!";
message.style.color="green";
y+=1;
yc.innerText=y;
}
else{
    message.innerText="You lose the match!";
    message.style.color="red";
    c+=1;
    cc.innerText=c;
}
}
res.onclick=()=>{
    yc.innerText=0;
    cc.innerText=0;
    y=0;
    c=0;
}