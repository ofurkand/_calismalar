const main_input = document.getElementById("input");
const todo_list = document.getElementById("list-container");
const addButton = document.getElementById("addTaskButton");
const app = document.getElementsByClassName("todo-app")[0];

let checkboxes;

// async function strike(){
//     console.log(this);
//     let span = document.createElement('span');
//     span.style.textDecoration= 'line-through;';
//     this.split('').forEach(element => {
//         setTimeout(()=>{span.textContent += element;},250);
//     });
// }

class YapilacakGorev{
    constructor(yapildiMi, gorev){
        this.yapildiMi = yapildiMi;
        this.gorev = gorev;
    }
    uret(){
        let li = document.createElement("li");
        let checkbox = document.createElement('input');
        let theValue = document.createElement('span');
        checkbox.type = 'checkbox';
        checkbox.checked = this.yapildiMi;
        theValue.innerText = this.gorev;
        li.appendChild(checkbox);
        li.appendChild(theValue);
        return li
    }
}

let todos = (localStorage.getItem('todos')) != null ? JSON.parse(localStorage.getItem('todos')).map(x => 
    new YapilacakGorev(x.yapildiMi, x.gorev)) : [];

function saveToDoList(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadToDoList(){
    if(todos.length > 0){
        todo_list.innerHTML="";
        todos = JSON.parse(localStorage.getItem('todos')).map(x => 
            new YapilacakGorev(x.yapildiMi, x.gorev));
        todos.forEach(element => {
            todo_list.appendChild(element.uret());
        });
        checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxesEventListener();
        checkboxes.forEach(x=>
        x.checked ? x.parentElement.getElementsByTagName('span')[0].style.textDecoration= 'line-through':
        x.parentElement.getElementsByTagName('span')[0].style.textDecoration= ''
    );
    }
}

function checkboxesEventListenerCode(){
    let span = this.parentElement.getElementsByTagName('span')[0];
    if(this.checked){
        span.style.textDecoration= 'line-through';
    }
    else{
        span.style.textDecoration= '';
    }
    let cnt = 0;
    Array.from(todo_list.children).forEach(element => {
        if(element === span.parentElement){
            todos[cnt].yapildiMi = !todos[cnt].yapildiMi;
        }
        cnt++;
    })
    saveToDoList();
}

function checkboxesEventListener(){    
    checkboxes.forEach(x => {
        x.removeEventListener('click', checkboxesEventListenerCode);
        x.addEventListener('click', checkboxesEventListenerCode);
    });

}

document.addEventListener('DOMContentLoaded', () => {
    if((localStorage.getItem('todos'))=== null){
        const sample1 = new YapilacakGorev(true,"Uygulamaya gir.");
        const sample2 = new YapilacakGorev(false,"Bilgisayarı kapat.");
        todos.push(sample1); todos.push(sample2);    
        saveToDoList();    
    }
    loadToDoList(); checkboxesEventListener();
});

addButton.addEventListener("click",()=>{
    if (main_input.value.trim() != '') {
        todos.push(new YapilacakGorev(false, main_input.value));
        saveToDoList();
        loadToDoList();
        main_input.value='';
        app.style.transition = 'opacity 0.250s';
        app.style.opacity= '0.2';
        setTimeout(()=>{app.style.opacity='1';},250);
    }
});