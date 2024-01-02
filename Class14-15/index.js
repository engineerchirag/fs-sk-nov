const addRef = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modalRef = document.querySelector('.modal');
const textareaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper');
const rightCategorySelection = document.querySelectorAll('.right-section .category');
const taskListDeleteRef = document.querySelectorAll('.tasks-wrapper .task .task-delete-icon')

addRef.addEventListener('click', function(e) {
    toggleModal();
});

function defaultCategorySelection() {
    removeAllCategorySelection();
    const firstCategory = document.querySelector('.right-section .category.p1');
    firstCategory.classList.add('selected');
}

function toggleModal() {
    const isHidden = modalRef.classList.contains('hide');
    if (isHidden) {
        modalRef.classList.remove('hide');

    } else {
        defaultCategorySelection();
        modalRef.classList.add('hide');
    }
}

const tasks = [];

textareaRef.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        const rightSelectedCategory = document.querySelector('.right-section .category.selected');
        const selectedCategoryName = rightSelectedCategory.getAttribute('data-category');
        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: selectedCategoryName,
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
        <div class="task-delete-icon"><i class="fa-solid fa-trash"></i></div>
    `;
    taskWrapperRef.appendChild(taskRef);
    const deleteIconRef = taskRef.querySelector('.task-delete-icon .fa-trash');
    // deleteIconRef.addEventListener('click', function(e) {
    //     const selectedTask = e.target.closest('.task');
    //     selectedTask.remove();
    //     deleteTaskFromData(task.id);
    // });
}

rightCategorySelection.forEach(function(categoryRef) {
    categoryRef.addEventListener('click', function(e) {
        removeAllCategorySelection();
        e.target.classList.add("selected");
    })
});

function removeAllCategorySelection() {
    rightCategorySelection.forEach(function(categoryRef) {
        categoryRef.classList.remove('selected');
    })
}

function deleteTaskFromData(taskId) {
    const selectedTaskIdx = tasks.findIndex((task) => task.id === taskId);
    tasks.splice(selectedTaskIdx, 1);
}

taskWrapperRef.addEventListener('click', function(e) {
    console.log(e.target);
    // TODO: Add logic to identify delete icon and remove respective task
})