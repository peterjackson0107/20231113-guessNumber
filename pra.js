let arrowBtn = document.getElementById("arrowBtn")
let firstNum = document.getElementById("guessNum")
let answer = Math.floor(Math.random() * 100 + 1)
const aTest = document.getElementById("test");
console.log(answer)
console.log(typeof (firstNum))

arrowBtn.addEventListener("click", () => {
    if (parseInt(firstNum.value) == answer) {
        aTest.innerText = "答對了";
    } else {
        aTest.innerText = "錯了啦";
    }
})