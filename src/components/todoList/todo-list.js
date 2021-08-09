import React from 'react';

import TodoListItem from '../todoListItem/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, 
  onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {

    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem 
          onDelete={ () => onDelete(item.id) }
          label={item.label}
          important={item.important}
          done={item.done}
          onToggleDone={ () => onToggleDone(item.id)}
          onToggleImportant={ () => onToggleImportant(item.id) }  
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
