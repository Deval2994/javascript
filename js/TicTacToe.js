
const boxes = document.querySelectorAll("#box")
let i = 1;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (i %2 === 0){
            box.textContent = "O"
            box.style.color = "rgb(0, 255, 0)"
            box.style.textShadow = "0 0 1rem rgba(0, 255, 0, 0.75)"
        }else{
            box.textContent = "X"
            box.style.color = "rgb(255, 0, 0)"
            box.style.textShadow = "0 0 1rem rgba(255, 0, 0, 0.75)"
        }
        i++;
    })
})
