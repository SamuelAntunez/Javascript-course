import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCount: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) =>{  //creara la aplicacion que renderizaremos en pantalla
    
    const displayTodos = () =>{
        const todo = todoStore.getTodo( todoStore.getCurrentFilter())
        renderTodos( ElementIDs.TodoList, todo)
        updatePendingCount()
        
    }
    const updatePendingCount = () =>{
        renderPending(ElementIDs.PendingCount);
    }
    

    // cuando la funcion app( ) se llama
    (()=>{

        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append( app );
        displayTodos()

    })();

    // Referencias HTML

    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompleted = document.querySelector(ElementIDs.ClearCompleted);
    const filtersUL = document.querySelectorAll(ElementIDs.TodoFilters);


    // Listeners

    newDescriptionInput.addEventListener('keyup', ( e ) =>{
        if (e.keyCode !== 13 ) return;
        if (e.target.value.trim().length === 0) return;

        todoStore.addTodo( e.target.value);
        displayTodos()
        e.target.value = ''

    })

    
 
    todoListUL.addEventListener('click', (e) =>{
        const element = e.target.closest('[data-id]')
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos()
    });
    todoListUL.addEventListener('click', (e) =>{
    const element = e.target.closest('[data-id]')
    if(e.target.getAttribute('class') === 'destroy'){
        todoStore.deleteTodo(element.getAttribute('data-id'))
        displayTodos()
    }})
    
    clearCompleted.addEventListener('click', (e) =>{
        todoStore.deleteCompleted();
        displayTodos()
    })
    
    filtersUL.forEach( e => {
        e.addEventListener('click', (e) =>{
            filtersUL.forEach(el => el.classList.remove('selected'))
            e.target.classList.add('selected')

            console.log(e.target.text)
            switch(e.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All);
                    break;
               case 'Completados':
                    todoStore.setFilter( Filters.Completed);
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending);
                    break;
            }   
            displayTodos()
        })

    })


}