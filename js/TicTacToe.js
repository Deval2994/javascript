const x = "X";
const o = "O";

const box = document.querySelectorAll("#box")

box.forEach(btn => {
    btn.onclick = function(){
        console.log(x)
        console.log(o)
    }
})