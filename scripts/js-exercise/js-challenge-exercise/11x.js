/*
    Local storage: 
    1. Đặt localStorage.setItem ở nơi mà object/array thường
    được thêm/sửa/xóa
    2. Đặt localStorage.getItem, object mặc định ở đầu đoạn
    code
    3. Lưu ý: localstorage chỉ lưu giá trị ở dạng string
    4. khi thêm/sửa/xóa phải chuyển sang kiểu dl string
    5. khi đặt giá trị mặc định phải chuyển kiểu dl 
    local storage sang dạng object/array
*/ 

const todoList = JSON.parse(localStorage.getItem('todoList')) || [
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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        // const { name, dueDate} = todoObject;
        const html = 
            `
            <div>${name}</div>
            <div>${dueDate}</div>
            <div>
                <button class="delete-btn" onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>
            </div>
            `;
        todoHTML += html;
    }
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

    localStorage.setItem('todoList', JSON.stringify(todoList));

    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}

