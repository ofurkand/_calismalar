const inputB = document.getElementById("input-box");
const listC = document.getElementById("list-container");

function addTask()
{
    if (inputB.value != '') {
        let li = document.createElement("li");
        li.innerHTML = inputB.value;
        listC.appendChild(li);
    }
}