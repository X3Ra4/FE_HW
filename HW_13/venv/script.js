const addTaskBtn = document.querySelector('#addTaskBtn');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

let lastKey = localStorage.key(localStorage.length - 1);
let indexActivity = lastKey ? Number(lastKey) + 1 : 1;

function createActivity(index, input) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${index}</td>
    <td>${input}</td>
    <td><button data-id="${index}" class="deleteBtn">Удалить</button></td>
  `;
  taskList.appendChild(tr);
}

addTaskBtn.addEventListener('click', e => {
  e.preventDefault();
  const inputActivity = taskInput.value.trim();
  if (!inputActivity) return;

  localStorage.setItem(indexActivity, inputActivity);
  
  createActivity(indexActivity, inputActivity);
  indexActivity++;
});


taskList.addEventListener('click', e => {
  if (!e.target.classList.contains('deleteBtn')) return;

  const id = e.target.dataset.id;
  localStorage.removeItem(id)

  e.target.closest('tr').remove();
})


function loadTasks() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!isNaN(parseInt(key, 10))) keys.push(key);
  }

  keys.sort((a, b) => parseInt(a) - parseInt(b));

  keys.forEach(key => {
    const value = localStorage.getItem(key);
    createActivity(key, value);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});
