import React, {Component} from 'react';

import './itemAddForm.css';

class ItemAddForm extends Component {

    render() {
        const { addItem } = this.props;

        return (
            <div className='item-add-form'>
                <button 
                onClick={ () => addItem('Hello world') }
                className='btn btn-outline-secondary'
                >
                    Add Item
                </button>
            </div>
        )
    }
}

export default ItemAddForm;