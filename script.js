const cardForm = document.querySelector('.card-form');
const int = document.querySelector('#input');
const ul = document.querySelector('#ul');
const mes = document.querySelector('#mes');

// CREATE TODO
const crateTodo = (id, value) => {

    const li = document.createElement('li');
    li.classList.add("li");
    li.id = id;

    li.innerHTML = `
        <span>${value}</span>
        <span>
            <button class="btn1">
                <i class="fa-solid fa-trash"></i>
            </button>
        </span>
    `;

    ul.appendChild(li);
};

// MESSAGE SYSTEM (GREEN / RED)
const showMes = (text, type) => {

    mes.style.display = "block";
    mes.textContent = text;

    if(type === "green"){
        mes.style.background = "limegreen";
    }

    if(type === "red"){
        mes.style.background = "tomato";
    }

    setTimeout(() => {
        mes.style.display = "none";
    }, 1500);
};

// ADD TODO
const todoAdd = (event) => {

    event.preventDefault();

    const value = int.value.trim();

    if(value === "") return;

    const id = Date.now().toString();

    crateTodo(id, value);

    int.value = "";

    showMes("Todo Created", "green");
};

// DELETE TODO (EVENT DELEGATION)
ul.addEventListener('click', (event) => {

    if(event.target.closest('.btn1')){

        const li = event.target.closest('.li');
        li.remove();

        showMes("Todo Deleted", "red");
    }

});

cardForm.addEventListener("submit", todoAdd);
//cal//
localStorage.setItem(int.value)