const main = document.querySelector('main')
const addButton = document.getElementById('add-button')

getTasks().then(tasks => {
    let toDoList = document.createElement('ul')
    main.appendChild(toDoList);
    console.log(toDoList)
    tasks.forEach(element => {
        let listItem = document.createElement('li');
        toDoList.appendChild(listItem);
        listItem.id = element.id;
        let inputTag = document.createElement('input');
        listItem.appendChild(inputTag);
        inputTag.setAttribute("type", "checkbox");
        const label = document.createElement('label');
        listItem.appendChild(label);
        label.innerHTML = element.description;
        inputTag = document.createElement('input');
        listItem.appendChild(inputTag);
        inputTag.setAttribute("type", "text");
        inputTag.setAttribute("value", element.description);
        toDoList.appendChild(listItem);
        let buttonTag = document.createElement('button');
        listItem.appendChild(buttonTag);
        buttonTag.innerHTML = `<img src="eraser.png">`;
        buttonTag.addEventListener('click', handleOnChangeEventEdit);
        buttonTag = document.createElement('button');
        listItem.appendChild(buttonTag);
        buttonTag.innerHTML = `<img src="trash.jpg">`;
        buttonTag.classList.add("delete");
        buttonTag.addEventListener('click', handleOnChangeEventDelete);
    })
})

const newTask = () => {
    const taskInput = document.getElementById("add-task");
    let task = {
        description: taskInput.value,
        done: false,
    }
    postData(task);
}

addButton.addEventListener('click', newTask)

const handleOnChangeEventDelete = () => {
    let taskID = event.target.parentElement.parentElement.id;
    console.log(taskID)
    deleteTask(taskID);
}

const handleOnChangeEventEdit = () => {
    let listItem = event.target.parentElement.parentElement;
    const label = listItem.querySelector("label");
    console.log(listItem)
    const editMode = listItem.classList.contains("edit");
    const editInput = listItem.querySelector('input[type=text]');
    if (editMode) {
        label.innerHTML = editInput.value;
    } else {
        editInput.value = label.innerHTML;
    }
    listItem.classList.toggle("edit");
    let task = {
        description: editInput.value,
        done: false,
    }
    updateTask(listItem.id, task)
}

