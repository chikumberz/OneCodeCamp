const form = document.getElementById('task-form');
const task = document.getElementById('task-field');
const task_list = document.getElementById('task-list');
const task_err = document.getElementById('task-err');

function log (msg) { console.log(msg); }

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let li = document.createElement('li');
    let task_val = task.value.trim();
    let remove_task = document.createElement('button');

    task_err.textContent = '';

    remove_task.innerHTML = 'x';
    remove_task.className = 'remove-task';
    remove_task.addEventListener('click', function (e) {
        if (confirm('Are you sure to remove this item?'))
            this.parentNode.remove();
    });

    if (task_val.length < 5) {
        task_err.textContent = 'Task is invalid.'
    } else {
        li.innerHTML = task_val;
        li.appendChild(remove_task);
        task_list.appendChild(li);
        this.reset();
    }
});

