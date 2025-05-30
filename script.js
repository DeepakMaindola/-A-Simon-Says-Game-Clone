let gameSeq=[];
let userSeq=[];

let btns = ["yellow" , "red", "purple" , "green"];

let started= false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = ` Level : ${level}`;
    
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
};

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="black"; 
        },150);
        reset();
    }
}


let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started =  false;
    gameSeq =[];
    userSeq=[];
    level=0;
}