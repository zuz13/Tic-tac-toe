const box0 = document.getElementById('box0');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const menu = document.getElementById('bottomGameMenu');
const buttonNewGame = document.getElementById('buttonNewGame');
const ButtonRematch = document.getElementById('ButtonRematch');
const ArraysBoxes = [...Array(9)]
let shifts = "O",writeAtBoxZero=true,writeAtBoxOne=true,writeAtBoxTwo=true,writeAtBoxThree=true
    ,writeAtBoxFour=true,writeAtBoxFive=true,writeAtBoxSix=true,writeAtBoxSeven=true,writeAtBoxEight=true,W;

const writeAtArrays = (Numbers,Letter) => ArraysBoxes[Numbers] = Letter;


const checkBox = value =>{
    writeAtBoxZero=value;
    writeAtBoxOne=value;
    writeAtBoxTwo=value;
    writeAtBoxThree=value;
    writeAtBoxFour=value;
    writeAtBoxFive=value;
    writeAtBoxSix=value;
    writeAtBoxSeven=value;
    writeAtBoxEight=value;
}

const menuWhenWinning = showMenu =>{
    switch (showMenu) {
        case true:
            menu.style.display = 'flex';
        break;
        case false:
            menu.style.display = 'none';
        break;
    
        default:
            console.error("only allows boolean")
        break;
    }
}

const Game = (rematch, winner,newGame) =>{
    for (let index = 0; index < ArraysBoxes.length; index++) {
        ArraysBoxes[index] = undefined;
    }
    for (let index = 0; index < ArraysBoxes.length; index++) {
        ArraysBoxes[index] = undefined;
    }
    document.getElementById('message').style.display = 'none';
    box0.innerHTML="";
    box1.innerHTML="";
    box2.innerHTML="";
    box3.innerHTML="";
    box4.innerHTML="";
    box5.innerHTML="";
    box6.innerHTML="";
    box7.innerHTML="";
    box8.innerHTML="";
    checkBox(true);
    if (rematch) {
        let scoreX = parseInt(document.getElementById('ScoreX').innerHTML);
        let scoreO = parseInt(document.getElementById('ScoreO').innerHTML);
        if (winner==='X') {
            document.getElementById('ScoreX').innerHTML = ++scoreX;
            menuWhenWinning(false);
        }else if (winner==='O') {
            document.getElementById('ScoreO').innerHTML = ++scoreO;
            menuWhenWinning(false);
        }else{
            menuWhenWinning(false); 
        }
    }
    if (newGame) {
        document.getElementById('ScoreX').innerHTML = 0;
        document.getElementById('ScoreO').innerHTML = 0;
        menuWhenWinning(false);
    }    
}

const shift = () =>{
    if(shifts === "X"){
        shifts = "O"
        return shifts
    }else{
        shifts = "X"
        return shifts
    }
}

const methodWin = () => {
    const checkDraw = () => {
        if (!ArraysBoxes.includes(undefined)) {
            console.log('E');
            Game(true,undefined,false);
        }
    };
    const win = Winner =>{
        switch (Winner) {
            case 'X':
               checkBox(false); 
               console.log('X wins!');
               menuWhenWinning(true);
               W=Winner;
               document.getElementById('message').style.display = 'flex';
               document.getElementById('message').innerHTML = `Win ${Winner}`;
            break;
            case 'O':
                checkBox(false);
                console.log('O wins!');
                menuWhenWinning(true);
                W=Winner;
                document.getElementById('message').style.display = 'flex';
                document.getElementById('message').innerHTML = `Win ${Winner}`;
            break;
            case 'E':
            break;
        
            default:
                console.error("only allows X or O");
            break;
        }
    }
    checkDraw();
    // Check rows
    for (let index = 0; index < 3; index++) {
        const rowStart = index * 3;
        const row = ArraysBoxes.slice(rowStart, rowStart + 3).join('');
        if (row === 'XXX'){
            win('X');
            // return;
        } else if (row === 'OOO') {
           win('O');
            // return;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        const col = ArraysBoxes[i] + ArraysBoxes[i + 3] + ArraysBoxes[i + 6];
        if (col === 'XXX') {
            win('X');
            // console.log('X wins!');
            // return;
        } else if (col === 'OOO') {
            win('O');
            // console.log('O wins!');
            // return;
        }
    }

    // Check diagonals
    const diagonal1 = ArraysBoxes[0] + ArraysBoxes[4] + ArraysBoxes[8];
    const diagonal2 = ArraysBoxes[2] + ArraysBoxes[4] + ArraysBoxes[6];

    if (diagonal1 === 'XXX' || diagonal2 === 'XXX') {
        // console.log('X wins!');
        win('X');
    } else if (diagonal1 === 'OOO' || diagonal2 === 'OOO') {
        // console.log('O wins!');
        win('O');
    }
};


box0.addEventListener('click', ()=> {
    if (writeAtBoxZero) {
        let letter = shift();
        box0.innerHTML = `${letter}`;
        writeAtArrays(0,letter);
        writeAtBoxZero=false;
        methodWin();
    }
});
box1.addEventListener('click', ()=>{
    if (writeAtBoxOne) {
        let letter = shift();
        box1.innerHTML = `${letter}`;
        writeAtArrays(1,letter);
        writeAtBoxOne=false;
        methodWin();
    }
});
box2.addEventListener('click', ()=>{
    if (writeAtBoxTwo) {
        let letter = shift();
        box2.innerHTML = `${letter}`;
        writeAtArrays(2,letter);
        writeAtBoxTwo=false;
        methodWin();
    }
})
box3.addEventListener('click', ()=> {
    if (writeAtBoxThree){
        let letter = shift();
        box3.innerHTML = `${letter}`;
        writeAtArrays(3,letter);
        writeAtBoxThree=false;
        methodWin();
    }
});
box4.addEventListener('click', ()=> {
    if (writeAtBoxFour) {
        let letter = shift();
        box4.innerHTML = `${letter}`;
        writeAtArrays(4,letter);
        writeAtBoxFour=false;   
        methodWin();     
    }
});
box5.addEventListener('click', ()=>{
    if (writeAtBoxFive) {
        let letter = shift();
        box5.innerHTML = `${letter}`;
        writeAtArrays(5,letter); 
        writeAtBoxFive=false;
        methodWin();
    }
});
box6.addEventListener('click', ()=> {
    if (writeAtBoxSix) {
        let letter = shift();
        box6.innerHTML = `${letter}`;
        writeAtArrays(6,letter);
        writeAtBoxSix=false;
        methodWin();
    }
});
box7.addEventListener('click', ()=> {
    if (writeAtBoxSeven) {
        let letter = shift();
        box7.innerHTML = `${letter}`;
        writeAtArrays(7,letter);
        writeAtBoxSeven=false
        methodWin();
    }
});
box8.addEventListener('click', ()=> {
    if (writeAtBoxEight) {
        let letter = shift();
        box8.innerHTML = `${letter}`;
        writeAtArrays(8,letter);
        writeAtBoxEight=false;
        methodWin();
    }
});
buttonNewGame.onclick = () => Game(false,null,true);
ButtonRematch.onclick = () =>Game(true,W,false);;