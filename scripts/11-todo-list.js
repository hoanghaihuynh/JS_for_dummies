
const todoList = ['nấu cơm', 'rửa chén'];

renderTodoList();

function renderTodoList() {
    let todoHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoValue = todoList[i];
        const html = `<p>${todoValue}</p>`;
        todoHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoHTML;

    console.log(todoHTML);
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}