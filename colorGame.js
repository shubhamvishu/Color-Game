var num=6;
var colors=getRandomColors(num);
var squares=document.getElementsByClassName("square");
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var msg=document.querySelector("#message");
var resestButton=document.querySelector("#reset");
var pickedColor=colors[Math.floor(Math.random()*colors.length)];
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
logic();
easyBtn.addEventListener("click",function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    num=3;
    resetGame();
});
hardBtn.addEventListener("click",function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    num=6;
    resetGame();
});
resestButton.addEventListener("click",function(){
    resetGame();
});

function logic(){
    //console.log(Math.random()*colors.length);
    //console.log(colors);
    //console.log("PC="+pickedColor);
    colorDisplay.textContent=pickedColor;
    for(var i=num;i<6;i++){
        squares[i].style.background="#232323";
        squares[i].style.display="none";
    }

    for(var i=0;i<num;i++){
        squares[i].style.background=colors[i];
        //console.log("Yo"+colors[i]);
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.background;
            //console.log(clickedColor,pickedColor);
            if(clickedColor===pickedColor){
                changeColors(pickedColor);
                msg.textContent="Correct";
                resestButton.textContent="Play Again";
                h1.style.backgroundColor=pickedColor;
            }
            else{
                this.style.background="#232323";
                msg.textContent="Try Again";
                setTimeout(function(){
                    msg.textContent="";
                },500);
                
            }
        })
    }

}
function getRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(getRandomColor());
    }
    return arr;
}
function getRandomColor(){
    return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}
function changeColors(pickedColor){
    for(var i=0;i<colors.length;i++){
        squares[i].style.background=pickedColor;
    }
}
function resetGame(){
    resestButton.textContent="New Colors";
    colors=getRandomColors(num);
    console.log("num="+num+" "+colors)
    pickedColor=colors[Math.floor(Math.random()*colors.length)];
    for(var i=0;i<num;i++){
        console.log("i="+i);
        squares[i].style.display="block";
        squares[i].style.background=colors[i];
    } 
    for(var i=num;i<6;i++){
        console.log("I="+i);
        squares[i].style.background="#232323";
        squares[i].style.display="none";
    }  
    h1.style.backgroundColor="steelblue";
}