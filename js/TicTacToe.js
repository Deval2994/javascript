const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boxes = document.querySelectorAll(".box");

const playGame = () => {
    let i = 1;
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (i % 2 === 0) {
                box.innerText = "O";
                box.style.color = "rgb(0, 255, 0)";
                box.style.textShadow = "0 0 1rem rgba(0, 255, 0, 0.75)";
            } else {
                box.innerText = "X";
                box.style.color = "rgb(255, 0, 0)";
                box.style.textShadow = "0 0 1rem rgba(255, 0, 0, 0.75)";
            }
            box.disabled = true;
            i++;
            checkWinner();
        });
    });
};

const checkWinner = () => {
    for (let pattern of patterns) {
        const [a, b, c] = pattern;
        if (boxes[a].innerText !== "" && boxes[b].innerText !== "" && boxes[c].innerText !== "") {
            if (
                boxes[a].innerText === boxes[b].innerText && 
                boxes[a].innerText === boxes[c].innerText
            ) {
                alert(`Player ${boxes[a].innerText} wins!`);
                resetGame();
                return;
            }
        }
    }
};

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.style.color = "";
        box.style.textShadow = "";
        box.disabled = false;
    });
};

playGame();
