import './style.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);//Cuando solo se requiere solo un argumento, se puede solo especificar el metodo

//LocalStorage, la informacion no tiene tiempo de expiracion, ambos son unicamente por dominio
// localStorage.setItem('mi-key', 'ABCD134')
// sessionStorage.setItem('mi-key', 'ABCD134')
