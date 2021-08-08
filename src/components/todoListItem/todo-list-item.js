import React from "react";

import "./todo-list-item.css";

class TodoListItem extends React.Component {
  
  render() {
    const { 
      label, onToggleDone, done, important,
      onToggleImportant
       } = this.props;

    let classNames = 'todo-list-item';

    if(done === true) {
      classNames += ' done';
    }

    if( important === true ) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span
          className='todo-list-item-label'
  
          onClick={onToggleDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={ this.props.onDelete }
        >
          <i className="fas fa-trash"></i>
        </button>
      </span>
    );
  }
}

export default TodoListItem;
