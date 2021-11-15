const form = document.getElementById('form')
const newTask = document.getElementById('newTask');
const description = document.getElementById('description');
const startDate = document.getElementById('startDate');
const startTime = document.getElementById('startTime');
const endDate = document.getElementById('endDate');
const endTime = document.getElementById('endTime');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo =>  addTask(todo));
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTask()
});

function addTask(todo){
    let todoText = newTask.value
    let descriptionTask = description.value
 

    if(todo) {
        todoText = todo.taskText
        descriptionTask = todo.descriptionTask
    }

    if(todoText && descriptionTask){
        let todoEl = document.createElement('li')
        let pEl = document.createElement('p')

        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText 
        pEl.innerText = descriptionTask

        pEl.classList.add('hide')
        todoEl.appendChild(pEl)
        

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e)=> {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todoEl.addEventListener('mouseover', () => {           
            pEl.classList.remove('hide')
            pEl.classList.add('show')
        
        })


        todosUL.appendChild(todoEl)
        newTask.value = ''
        description.value = ''

        updateLS()
    }
}

function updateLS(){
    todoEl = document.querySelectorAll('li');

    const todos = []
    todoEl.forEach(todoEl => {
        todos.push({
            taskText: todoEl.innerText,
            completed: todoEl.classList.contains('completed'),
            descriptionTask : todoEl.innerText

        })
    })
    console.log(todos);

localStorage.setItem('todos', JSON.stringify(todos))

}
