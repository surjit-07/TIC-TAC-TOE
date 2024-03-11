let turn = "X";
let isgameover = true;

// funtion to change the turn
let chageturn = () => {


    return turn === "X" ? "O" : "X"
}

// funtion to check for win
let checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".win").innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            // document.querySelector(".content").style.display = "block";
            isgameover = true
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = chageturn();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }

        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".win").style.display = "none";

})


let clous = document.querySelector(".winbox").addEventListener("click", (e) => {
    document.querySelector(".content").style.display = "none";

})