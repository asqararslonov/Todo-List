import React from 'react'
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AppHeader from "./components/appHeader/app-header";
import SearchPanel from "./components/searchPanel/search-panel";
import ItemStatusFilter from "./components/itemStatusFilter/item-status-filter";
import TodoList from "./components/todoList/todo-list";

class App extends Component {
    state = {
        todoData: [
            { id: 1, label: "Drink Coffee", important: false },
            { id: 2, label: "Make Awesome App", important: true },
            { id: 3, label: "Have a lunch", important: false },
        ],
    };

    onItemDelete = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // state.todoData.splice( idx, 1 ); -> bu xato, state ni to'g'ridan
            // to'g'ri o'zgartirish mumkun emas!!!

            // [ a, b, c, d, e ]; -> eski massiv (state);
            // [ a, b ] -> before
            // [ d, e ] -> after
            // res [ ...before, ...after ];
            // [ a, b, d, e ];
            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            };
        });
    };

    render() {
        const { todoData } = this.state;
        const { onItemDelete } = this;

        return (
            <div className="todo-app">
                <AppHeader toDo={2} done={1} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={todoData} onDelete={onItemDelete} />
            </div>
        );
    }
}

export default App