import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component {

  state = {
    term: ''
  };


  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const {onSearchChange, state: { term } } = this;

    return (
        <input type="text"
               value={term}
               onChange={onSearchChange}
               className="form-control search-input"
               placeholder="type to search" />
    );
  }
};

export default SearchPanel;
