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

  onToggleImportant = (id) => {
    this.setState( (state) => {
      const idx = state.todoData.findIndex( el => el.id === id );
      const oldItem = state.todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important};

      const newArray = [
        ...state.todoData.slice(0, idx),
        newItem,
        ...state.todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      }
    });

  };

  onToggleDone = (id) => {
    this.setState( (state) => {
      const idx = state.todoData.findIndex( el => el.id === id );
      const oldItem = state.todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done};

      const newArray = [
        ...state.todoData.slice(0, idx),
        newItem,
        ...state.todoData.slice(idx + 1)
      ];
      return {
        todoData: newArray
      }
    });
  };

  render() {
    const { todoData } = this.state;
    const { onItemDelete, addItem, onToggleImportant, onToggleDone } = this;

    return (
      <div className="todo-app">
        <AppHeader toDo={2} done={1} />
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
