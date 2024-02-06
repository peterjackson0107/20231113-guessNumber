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

// 在文檔加載完成後執行的代碼
document.addEventListener("DOMContentLoaded", function() {
    // 獲取按鈕元素
    var button = document.getElementById("arrowBtn");

    // 獲取顯示猜測次數的元素
    var guessCountElement = document.getElementById("guessCount");
    var guessCount = 0;

    // 監聽按鈕點擊事件
    button.addEventListener("click", function() {
        guessCount++;
        guessCountElement.textContent = "猜的次數：" + guessCount;
    });
});