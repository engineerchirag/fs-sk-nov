const addRef = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modalRef = document.querySelector('.modal');
const textareaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper');

addRef.addEventListener('click', function(e) {
    toggleModal();
});

function toggleModal() {
    const isHidden = modalRef.classList.contains('hide');
    if (isHidden) {
        modalRef.classList.remove('hide');
    } else {
        modalRef.classList.add('hide');
    }
}

const tasks = [];

textareaRef.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: 'p1',
        };
        tasks.push(newTask);
        e.target.value = "";
        toggleModal();
        createTask(newTask);
    }
});

function createTask(task) {
    const taskRef = document.createElement('div');
    taskRef.className = 'task';
    taskRef.innerHTML = `
        <div class="task-category ${task.category}"></div>
        <div class="task-id">${task.id}</div>
        <div class="task-title">${task.title}</div>
    `;
    taskWrapperRef.appendChild(taskRef);
}