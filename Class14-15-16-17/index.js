const addRef = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modalRef = document.querySelector('.modal');
const textareaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper');
const rightCategorySelection = document.querySelectorAll('.right-section .category');
const taskListDeleteRef = document.querySelectorAll('.tasks-wrapper .task .task-delete-icon')
const headerCategoryFilterWrapper =  document.querySelector('header .category-wrapper');
const taskSearchRef = document.querySelector('.task-search input');

const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');


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



function renderTaskList() {
    tasks.forEach((task) => {
        createTask(task);
    })
}
renderTaskList();


function addTasksInData(newTask) {
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

textareaRef.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        const rightSelectedCategory = document.querySelector('.right-section .category.selected');
        const selectedCategoryName = rightSelectedCategory.getAttribute('data-category');
        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: selectedCategoryName,
        };
        addTasksInData(newTask);
        e.target.value = "";
        toggleModal();
        createTask(newTask);
    }
});

function createTask(task) {
    const taskRef = document.createElement('div');
    taskRef.className = 'task';
    // taskRef.setAttribute('data-id', task.id);
    taskRef.dataset.id = task.id;
    taskRef.innerHTML = `
        <div class="task-category" data-priority="${task.category}"></div>
        <div class="task-id">${task.id}</div>
        <div class="task-title"><textarea>${task.title}</textarea></div>
        <div class="task-delete-icon"><i class="fa-solid fa-trash"></i></div>
    `;
    taskWrapperRef.appendChild(taskRef);
    const textareaRef = taskRef.querySelector('.task-title textarea');
    textareaRef.addEventListener('change', function(e) {
        const updatedTitle = e.target.value;
        const currentTaskId = task.id;
        updatedTitleInData(updatedTitle, currentTaskId);
    });
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

function updatedTitleInData(updatedTitle, taskId) {
    const selectedTaskIdx = tasks.findIndex((task) => Number(task.id) === Number(taskId));
    const selectedTask = tasks[selectedTaskIdx];
    selectedTask.title = updatedTitle;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromData(taskId) {
    const selectedTaskIdx = tasks.findIndex((task) => Number(task.id) === Number(taskId));
    tasks.splice(selectedTaskIdx, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskWrapperRef.addEventListener('click', function(e) {
    console.log(e.target.classList.contains('fa-trash'));
    if (e.target.classList.contains('fa-trash')) {
        const currentTaskRef = e.target.closest('.task');
        currentTaskRef.remove();
        const taskId = currentTaskRef.dataset.id;
        deleteTaskFromData(taskId);
        console.log(tasks);
    }

    if (e.target.classList.contains('task-category')) {
        const currentPriority = e.target.dataset.priority;
        const nextPriority = getNextPriority(currentPriority);
        e.target.dataset.priority = nextPriority;
        const taskId = Number(e.target.closest('.task').dataset.id);
        updatePriorityInData(taskId, nextPriority);
    }
})

function updatePriorityInData(taskId, nextPriority) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].category = nextPriority;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getNextPriority(currentPriority) {
    const priorityList = ['p1', 'p2', 'p3', 'p4'];
    const currentPriorityIdx = priorityList.findIndex((p) => p === currentPriority);

    const nextPriorityIdx = (currentPriorityIdx + 1) % 4; 
    // (1 + 1) % 4 = 2
    // (3 + 1) % 4 = 0

    return priorityList[nextPriorityIdx];
}

headerCategoryFilterWrapper.addEventListener('click', function(e) {
    if (e.target.classList.contains('category')) {
        const selectedPriority = e.target.dataset.priority;
        const taskListRef = document.querySelectorAll('.task');
        taskListRef.forEach(taskRef => {
            taskRef.classList.remove('hide');
            const currentTaskPriority = taskRef.querySelector('.task-category').dataset.priority;
            if (currentTaskPriority !== selectedPriority) {
                taskRef.classList.add('hide');
            }
        })

    }
})

removeRef.addEventListener('click', function(e) {
    const isDeleteEnabled = e.target.classList.contains('enabled');
    if (isDeleteEnabled) {
        e.target.classList.remove('enabled');
        taskWrapperRef.dataset.deleteDisabled = true;
    } else {
        e.target.classList.add('enabled');
        taskWrapperRef.dataset.deleteDisabled = false;
    }
})

taskSearchRef.addEventListener("keyup", function(e) {
    taskWrapperRef.innerHTML = "";

    // In-memory Data
    tasks.forEach((task) => {
        const currentTitle = task.title.toLowerCase();
        const searchText = e.target.value.toLowerCase();
        const taskId = String(task.id);
        if (searchText.trim() === "" 
            || currentTitle.includes(searchText) 
            || taskId.includes(searchText)
        ) {
            createTask(task);
        }
    })

    // DOM Reference
    // TODO: Assigment
})