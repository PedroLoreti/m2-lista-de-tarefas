const tasks = [
    {title: "Comprar comida para o gato", type: "Urgente"},
    {title: "Consertar Computador", type: "Importante"},
    {title: "Beber água", type: "Normal"},
    {title: "Enviar relatório trimestral", type: "Importante"},
    {title: "Fazer exercícios físicos", type: "Normal"},
    {title: "Agendar consulta médica", type: "Urgente"},
    {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
    {title: "Limpar a despensa", type: "Importante"},
    {title: "Pagar a conta de energia", type: "Urgente"},
    {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(listObjTask) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    for (let i = 3; i < listObjTask.length; i++) {
        let taskItem = (createTaskItem(listObjTask[i]));
        ul.appendChild(taskItem);
    }
}
renderElements(tasks);

function createTaskItem(objTask) {
    const list = document.createElement('li');
    const div_element = document.createElement('div');
    const span_element = document.createElement('span');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');

    list.appendChild(div_element);
    div_element.appendChild(span_element);
    div_element.appendChild(paragraph);
    list.appendChild(button);

    paragraph.innerText = objTask.title;

    list.classList.add('task__item');
    div_element.classList.add('task-info__container');
    span_element.classList.add('task-type');
    button.classList.add('task__button--remove-task');
    
    if (objTask.type.toLowerCase() === 'urgente') {
        span_element.classList.add('span-urgent');
    } else if (objTask.type.toLowerCase() === 'importante') {
        span_element.classList.add('span-important');
    } else {
        span_element.classList.add('span-normal');
    }

    button.addEventListener('click', function() {
        const index = tasks.indexOf(objTask);
        if (index !== -1) {
            tasks.splice(index, 1);
            renderElements(tasks);
        }
    });

    return list;
}

const button_form = document.querySelector('.form__button--add-task');

button_form.addEventListener('click', function(event) {
    event.preventDefault();
    const taskTitle = document.querySelector('.form__input--text');
    const taskType = document.querySelector('.form__input--priority');
    
    if (taskTitle.value && taskType.value){
        const newTask = {
            title: taskTitle.value,
            type: taskType.value
        };
    
        tasks.push(newTask);
    
        taskTitle.value = '';
        taskType.value = '';
        
        renderElements(tasks);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
})

