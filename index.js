let currentPlayer = "X";
let array = Array(9).fill(null);

function handleClick(el){
    const id = Number(el.id);
    if(array[id] !== null) return;
    array[id] = currentPlayer;
    el.innerText = currentPlayer;
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }
    console.log(array);
} 