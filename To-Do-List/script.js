// script.js

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

console.log('Task input field:', taskInput);
console.log('add task button:', addTaskBtn);
console.log('Task List:', taskList);

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  console.log('Add task button clicked!');
  const taskText = taskInput.value.trim();
  console.log('Task text:', taskText);
  if (taskText !== '') {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
      <input type="checkbox" class="complete-checkbox">
      <span>${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(task);
    taskInput.value = '';

    const deleteBtn = task.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(task);
    });

    const completeCheckbox = task.querySelector('.complete-checkbox');
    completeCheckbox.addEventListener('change', () => {
      const taskSpan = task.querySelector('span');
      if (completeCheckbox.checked) {
        taskSpan.style.textDecoration = 'line-through';
        taskSpan.style.color = 'gray';
      } else {
        taskSpan.style.textDecoration = 'none';
        taskSpan.style.color = 'black';
      }
    });
  }
}

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const task = e.target.parentNode;
    const taskSpan = task.querySelector('span');
    const newText = prompt('Enter new task text:', taskSpan.textContent);
    if (newText !== null && newText !== '') {
      taskSpan.textContent = newText;
    }
  }
});
