const submitButton = document.querySelector("#sub");
const ul = document.querySelector(".all_todos");
const inputText = document.querySelector(".user_input input[type='text']");
console.log(inputText.value);
const span = document.querySelector(".sp");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(inputText.value);
  if (inputText.value === "") {
    alert("add todo");
    return;
  }
  const newli = document.createElement("li");
  const newliinner = `
        <span>
            ${inputText.value}
        </span>
        <button class="done">DONE</button>
        <button class="remove">REMOVE</button>
    `;
  newli.innerHTML = newliinner;
  ul.append(newli);
  console.log(newli);
  inputText.value = "";
});
ul.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList == "done") {
    console.log("done");
    e.target.parentNode.firstElementChild.style.textDecoration = "line-through";
  }
  if (e.target.classList == "remove") {
    console.log("remove");
    e.target.parentNode.remove();
  }
});
