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
			value: ''
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
	 * @PARAM event
	 */
	handleChange (ev) {
		const value = ev.target.value;

		this.setState({
			value: value
		});

		this.suggest();

	}

	getSearchResults () {
		const { value } = this.state;

		fetch('http://www.omdbapi.com/?t=' + value)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			this.setState({
				searchResult: response
			});
		});


	}

	render () {
		return (
			<div className="searchbar">
				<div className="searchbar__icon">
				</div>
				<input className="searchbar__bar" type="text" name="search"
					value={this.state.value}
					onChange={val => this.handleChange(val)}
				/>
			</div>
		);
	}
}

export default SearchBar;
