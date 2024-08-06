
const todoList = [
    {
        name: 'nấu cơm',
        dueDate: '2024-10-21'
    }, 
    {
        name: 'rửa chén',
        dueDate: '2023-03-30'
    }    
];

renderTodoList();

function renderTodoList() {
    let todoHTML = '';

    todoList.forEach(function(todoObject, index) {
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        // const { name, dueDate} = todoObject;
        const html = 
            `
            <div>${name}</div>
            <div>${dueDate}</div>
            <div>
                <button class="delete-btn" onclick="
                    todoList.splice(${index}, 1);
                    renderTodoList();
                ">Delete</button>
            </div>
            `;
        todoHTML += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todoHTML;

    console.log(todoHTML);
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push(
        {
            // name: name,
            // dueDate: date
            name,
            dueDate
        }
    );
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}

