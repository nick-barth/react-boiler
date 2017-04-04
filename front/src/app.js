/*
 * Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'components/SearchBar';

/*
 * A we bit lazy, but I'm going to use this as the main route.
 */
ReactDOM.render(
	<div className="layout">
		<div className="layout__container">
			<div className="layout__title">
				The Movie Thing
			</div>
			<SearchBar />
		</div>
	</div>,
	document.getElementById('app')
);
