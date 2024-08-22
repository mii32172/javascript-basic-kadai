// btn,textというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");
const text = document.getElementById("text");

// HTML要素がクリックされたときにテキストを変更する
btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});
