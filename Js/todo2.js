//Всі елементи
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay")


//Деліт
function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//Загрузка
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//Добавлення нового ту ду
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //Робимо лісти і спен
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
        
    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);

    deleteTodo();
    
    }
    
});

// Перечеркування
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

//Ховає інпут
pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});



//Збергіє ліст в локальну память
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

//Очищює весь туду
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

//Оверлей
tipsBtn.addEventListener("click",function(){
   overlay.style.height = "100%";
});

//Закриває оверлей
closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";
  
})

//Видалити туду
deleteTodo();

//Загрузити туду
loadTodo();
