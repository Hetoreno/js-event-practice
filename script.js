const button = document.getElementById(`submit`);

const list = document.getElementById(`todo-list`);
const item = list.children;
const num = document.querySelector(`.todo-num b`);

const mainTitle= document.querySelector(`.title`);
const newTitle = document.querySelector(`.new`);


/* button.addEventListener("click",addItem);      //Option 1
function addItem(){
    document.write(`fsdfds`); 
} */

button.addEventListener("click", function(){  //Option 2
    const newItem = document.createElement("li");
    newItem.classList.add(`item`);
    newItem.innerText = `Item ${item.length + 1}`;
    list.appendChild(newItem);
    num.innerText = item.length;
});

button.addEventListener(`click`, function(){
    mainTitle.classList.add(`color`);
});

button.addEventListener(`mouseover`, function(){
    newTitle.classList.toggle("yes");
});