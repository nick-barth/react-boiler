/*
 * Dependencies
 */

// Vendors
import React from 'react';
import _ from 'lodash';

/*
 * TEXT
 * ====
 */
class SearchBar extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			value: '2'
		};

		this.suggest = _.debounce(this.getSearchResults, 500, {
			//leading: true,
			trailing: true,
			maxWait: 1000
		});

		this.handleChange = this.handleChange.bind(this);

	}

	/*
	 * Updates state with search data when it changes
	 */
	handleChange (value) {

		console.log(value);

		this.suggest();
	}

	getSearchResults () {
		const { value } = this.state;

		console.log(this.input);


		fetch('http://www.omdbapi.com/?t=' + value)
		.then(function (response) {
			return response.json();
		});
	}

	render () {
		return (
			<div className="searchbar">
				<div className="searchbar__icon">
				</div>
				<input className="searchbar__bar" type="text" name="search"
					value={this.state.value}
					ref={(input) => this.input = input}
				/>
			</div>
		);
	}
}

export default SearchBar;
