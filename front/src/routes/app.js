/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

// Store
import { actions as userActions } from 'store/user.js';

// Components
import Header from '../components/header/index.js';
import Footer from '../components/footer/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */

@connect(
	state => ({
		store: state
	}), {
		setRecords: userActions.setRecords

	}
)
export default class LandingLayout extends React.Component {

	/*
	 * Validate props
	 */
	static propTypes = {
		store: React.PropTypes.object,
		children: React.PropTypes.element,
		setRecords: React.PropTypes.func

	};

	constructor (props) {
		super(props);

	}

	componentWillMount () {

		const { setRecords } = this.props;

		if (localStorage.getItem('quakechampionselect')) {
			const storage = JSON.parse(localStorage.getItem('quakechampionselect'));

			if (storage) {
				setRecords(storage.matchups, 'matchups');
				setRecords(storage.tips, 'tips');
				setRecords(storage.matchupTips, 'matchupTips');
			}

		}
	}


	render () {
		return (
			<div className="layout">
				<Header />
					{this.props.children}
				<Footer />
			</div>
		);
	}

}
