var listElement = document.querySelector('#app ul'); //busca dentro da div app o elemento ul
var inputTitleElement = document.querySelector('input[name=title]'); //busca dentro da div app o elemento input name title
var inputDescElement = document.querySelector('input[name=desc]'); //busca dentro da div app o elemento input name desc
var inputPrioElement = document.querySelector('input[name=prio]');//busca dentro da div app o elemento input name prio
var buttonElement = document.querySelector('button[name=add]'); //busca dentro da div app o elemento button name add
var buttonEndElement = document.querySelector('button[name=end]');  //busca dentro da div app o elemento button name end

var todos = [];
var prior = [];

//renderiza os ToDos
function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

// Adiciona novos ToDos
function addTodo() {
    var todoText = inputTitleElement.value;
    var todoDesc = inputDescElement.value;
    var todoPrio = inputPrioElement.value;

    prior.push(parseInt(todoPrio));
    todos.push(`Tarefa: ${todoText} Descrição: ${todoDesc}    `);
    inputTitleElement.value = '';
    inputDescElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

// Deleta os ToDos
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}

// Organiza os ToDos por dia com no máx 13 pontos por dia
function listOganized() {
    listElement.innerHTML = '';
    var tot = 0;
    var j = 1;

    for (var i = 0; i < prior.length; i++) {
        tot += prior[i];
        if (tot <= 13) {
            var todoElement = document.createElement('li');
            todoElement.innerHTML = `Dia ${j}: ${todos[i]}`;
            listElement.appendChild(todoElement);
        } else {
            tot = 0;
            i -= 1;
            j += 1;
        }
    }    
}

buttonEndElement.onclick = listOganized;

