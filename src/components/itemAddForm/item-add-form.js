import React, {Component} from 'react';

import './itemAddForm.css';

class ItemAddForm extends Component {

	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({ label: e.target.value });
	};

	onSubmit = (e) => {
		const {label} = this.state;
		e.preventDefault();

		if( label.length > 0) {
			this.props.addItem(label);
			this.setState({label: ''});
		}

	};

	render() {
		const {onLabelChange, onSubmit, state: { label } } = this;

		return (
				<form className='item-add-form' onSubmit={ onSubmit } >
					<input
							type="text"
							className='form-control'
							onChange={onLabelChange}
							value={label}
							placeholder='What needs to be done'
					/>

					<button className='btn btn-outline-secondary'>
						Add Item
					</button>
				</form>
		)
	}
}

export default ItemAddForm;