import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={2} done={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />

      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));