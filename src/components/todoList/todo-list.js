import React from 'react';

import TodoListItem from '../todoListItem/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete }) => {

  const elements = todos.map((item) => {

    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem 
          onDelete={ () => onDelete(item.id) }
          label={item.label}
          important={item.important}  
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
