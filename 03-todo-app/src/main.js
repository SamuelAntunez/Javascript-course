import './style.css'
import { App } from "./todo/app";
import todoStore from "./store/todo.store";

todoStore.initStore()

todoStore.toggleTodo()



App('#app')