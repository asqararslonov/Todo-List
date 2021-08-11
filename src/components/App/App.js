import React, { Component } from "react";

import AppHeader from "../appHeader/app-header";
import SearchPanel from "../searchPanel/search-panel";
import TodoList from "../todoList/todo-list";
import ItemStatusFilter from "../itemStatusFilter/item-status-filter";
import ItemAddForm from "../itemAddForm/item-add-form";

class App extends Component {
  rndId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
  };

  onItemDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      };
    });
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.rndId++
    }
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const newArr = [...state.todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty= (arr, id, propName) => {
    const idx = arr.findIndex( el => el.id === id );
    const oldItem = arr[idx];
    const newItem = { ...[oldItem],[propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

  }


  onToggleImportant = (id) => {
    this.setState( (state) => {

      return {
        todoData: this.toggleProperty(state.todoData, id, 'important')
      }
    });

  };

  onToggleDone = (id) => {
    this.setState( (state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id,  'done')
      }
    });
  };

  render() {
    const { todoData } = this.state;
    const { onItemDelete, addItem, onToggleImportant, onToggleDone } = this;

    const doneCount  = todoData.filter(el => el.done).length
    const todoCount  = todoData.length - doneCount
    return (
        <div className="todo-app">

          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList
              todos={todoData}
              onDelete={onItemDelete}
              onToggleImportant={onToggleImportant}
              onToggleDone={onToggleDone}
          />
          <ItemAddForm addItem={addItem} />
        </div>

    );
  }
}

export default App;
