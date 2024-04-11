let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started = false;
let level=0;
let h2 = document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started")
        started=true

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
}
function levelUp(){
    userSeq=[]
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`)
    // console.log(randIdx);
    // console.log(randClr);
    // console.log(randBtn);
    gameSeq.push(randClr);
    console.log(gameSeq)
    btnFlash(randBtn);

} 
function checkAns(idx){
    //console.log("curr level: ",level)
    //let idx = level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML= `Game Over. Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor=" rgb(141, 221, 221)";
        },500)
        reset();
    }
}
function btnPress(){
    //console.log(this)
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started =false
    gameSeq=[]
    userSeq=[]
    level = 0
}