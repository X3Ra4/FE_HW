const buttonSendLink = document.getElementById('SendLink');
const buttonGoToLink = document.getElementById('GoToLink');
let link;

buttonSendLink.addEventListener('click', e => {
  e.preventDefault();
  link = prompt('Enter link: ');

})
function createLink(baseLink) {
  if (baseLink.startsWith('http')) {
    return baseLink
  } else {
    return `https://${baseLink}`
  }

}
buttonGoToLink.addEventListener('click', e => {
  e.preventDefault();
  window.location.href = createLink(link);
})



//hw2

const mainDiv = document.getElementById('div_hw2');

mainDiv.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    clickedButtonText = e.target.textContent;
    alert(`Натиснута кнопка: ${clickedButtonText}`);
  }
});


//hw3

const buttonAdd = document.getElementById('addTaskBtn');
const containerUl = document.getElementById('taskList');

buttonAdd.addEventListener('click', e => {
  e.preventDefault();
  const task = document.getElementById('newTaskInput');
  const li = document.createElement('li');

  if (task.value == '') {
    alert('Поле не может быть пустым')
  } else {
  li.textContent = task.value;
  task.value = '';

  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = 'Видалити';
  buttonDelete.classList.add('buttonDelete');

  li.appendChild(buttonDelete);

  containerUl.appendChild(li);
  }
})

containerUl.addEventListener('click', e => {
  if (e.target.classList.contains('buttonDelete')) {
    e.target.parentElement.remove();
  }
});