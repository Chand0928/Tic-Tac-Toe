let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

// let name1=prompt('Enter player 1 Name')
// let name2=prompt('Enter player 2 Name')


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




// change theme
let modeBtn=document.querySelector('#mode'); 
let currMode='light';

modeBtn.addEventListener('click',()=>{
    if (currMode==='light'){
        currMode="dark";
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('body').style.color='white';



        document.querySelector('#reset-btn').style.color='black';
        document.querySelector('#reset-btn').style.backgroundColor='White';
        


        document.querySelector('#new-btn').style.color='black';
        document.querySelector('#new-btn').style.backgroundColor='white';
        



        document.querySelector('#mode').style.color='black';
        document.querySelector('#mode').style.backgroundColor='white';



        document.querySelector('#msg').style.color='white';
      }
      else{
        currMode='light';
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('body').style.color='black';



        document.querySelector('#reset-btn').style.color='white';
        document.querySelector('#reset-btn').style.backgroundColor='black';



        document.querySelector('#new-btn').style.color='white';
        document.querySelector('#new-btn').style.backgroundColor='black';
        


        document.querySelector('#mode').style.color='white';
        document.querySelector('#mode').style.backgroundColor='black';


        document.querySelector('#msg').style.color='black';
    }
    console.log(currMode);
})