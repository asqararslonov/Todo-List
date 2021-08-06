import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false,
    }

    onLabelClick = () => {
        this.setState(state =>({done: !state.done}))
    }

    onMarkImportant = () => {
        this.setState(state =>({important: !state.important}))
    }

    render() {
        const { label } = this.props;
        const {done, important} = this.state;

        let classNames = ' todo-list-item'

        if (done === true) {
            classNames += ' done'

        }
        if (important === true){
            classNames += ' important'
        }

        return (
            <span className={classNames}>
            <span
                className={"todo-list-item-label"}
                onClick={this.onLabelClick}
            >
            {label}
      </span>

      <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={ this.onMarkImportant }>
          <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fas fa-trash"></i>
      </button>
    </span>
        )
    }
};


export default TodoListItem;
