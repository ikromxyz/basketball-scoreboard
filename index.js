let countLeft = document.getElementById("count1-el")
let countRight = document.getElementById("count2-el")

let count1 = 0
let count2 = 0

function increment1() {
    count1 += 1
    countLeft.textContent = count1
}
function increment2() {
    count1 += 2
    countLeft.textContent = count1
}
function increment3() {
    count1 += 3
    countLeft.textContent = count1
}
function increment4() {
    count2 += 1
    countRight.textContent = count2
}
function increment5() {
    count2 += 2
    countRight.textContent = count2
}
function increment6() {
    count2 += 3
    countRight.textContent = count2
}

