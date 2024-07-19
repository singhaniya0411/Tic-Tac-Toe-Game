let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const rstbtn = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
const disabledBoxes = () =>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWin = (winner) =>{
    msg.innerText = `Winner  ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);

                showWin(pos1);
            }
        }
        
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

newGame.addEventListener("click",rstbtn);
resetBtn.addEventListener("click",rstbtn);