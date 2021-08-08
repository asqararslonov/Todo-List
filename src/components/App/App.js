import React, { Component } from "react";

import AppHeader from "../appHeader/app-header";
import SearchPanel from "../searchPanel/search-panel";
import TodoList from "../todoList/todo-list";
import ItemStatusFilter from "../itemStatusFilter/item-status-filter";
import ItemAddForm from "../itemAddForm/item-add-form";

class App extends Component {
  rndId = 555;

  state = {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false },
      { id: 2, label: "Make Awesome App", important: false },
      { id: 3, label: "Have a lunch", important: false },
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

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.rndId++,
    };

    this.setState((state) => {
      const newArr = [...state.todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    console.log("important", id);
  };

  onToggleDone = (id) => {
    console.log("done", id);
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
