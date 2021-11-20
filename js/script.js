let userName = prompt("Input your Name", "User");

if(userName == "" || userName == null){
        document.getElementById("userName").innerHTML = "Unknown user";
}
else if(userName.length > 20){
    document.getElementById("userName").innerHTML = "Unknown user";
}
else
    document.getElementById("userName").innerHTML = userName;


let attemptLabel = document.getElementById("attempt");

var matches = document.querySelectorAll("div.col > img");

let step = 0, swapCol = 0, imgIndex = 0, mode = 7, flag = 0;

matches.forEach(element => {
    imgIndex = Math.floor(Math.random() * (7 - 1) + 1);
    element.src = "img/"+ imgIndex +".svg";
});

function oneSwap(colNum){
    matches[colNum + 2].src = matches[colNum + 1].src;
    matches[colNum + 1].src = matches[colNum].src;
    imgIndex = Math.floor(Math.random() * (mode - 1) + 1);
    matches[colNum].src="img/"+ imgIndex +".svg";
}

function mixLines(){
    let timerId = setInterval(() => oneSwap(swapCol), 600);
    setTimeout(() => { clearInterval(timerId); swapCol+=3;}, 4000);
}

function easyMode(){
    mode = 3;
    if(flag == 1){
        mode = 2;
    } else if(flag == 2){
        mode = 7;
    }
    flag++;
}

function generate(){
    swapCol = 0;
    imgIndex = 0;

    mixLines();
    let timerId = setInterval(() => mixLines(), 4000);
    setTimeout(() => { clearInterval(timerId); 
        if(step == 3){
            alert("You lost all your attempts, try one more time");
            attemptLabel.innerHTML = "Attempt number 0 of 3";
            step = 0;
            }
        if(matches[1].src == matches[4].src && matches[1].src == matches[7].src){
                alert("You win!!!\nNow deposit money and play for real");
            }
    }, 11800);

    step++;
    attemptLabel.innerHTML = "Attempt number " + step + " of 3";
}