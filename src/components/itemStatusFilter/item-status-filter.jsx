import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({filter, onFilterChange}) => {

	const buttons = [
		{name: 'all', label: 'All'},
		{name: 'active', label: 'Active'},
		{name: 'done', label: 'Done'},
	];

	const btn = buttons.map(({name, label}) => {
		const isActive = filter === name;
		const classNames = isActive ? 'btn-info' : 'btn-outline-secondary';

		return (
				<button key={name}
								type="button"
								className={`btn ${classNames}`}
								onClick={ () => onFilterChange(name)}
				>
					{label}
				</button>
		)
	});


	return <div className="btn-group">{btn}</div>;
};

export default ItemStatusFilter;
