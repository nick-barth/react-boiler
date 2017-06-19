/*
 * Dependencies
 */

// Vendors
import React from 'react';

import API from 'api';

/*
 * LOGIN
 * =====
 */


class Login extends React.Component {


	constructor (props) {
		super(props);

		this.state = {
			login: {
				name: null,
				password: null
			},
			signup: {
				name: null,
				password: null
			}
		};
	}

	handleSignup (e) {
		e.preventDefault();
		const { signupName, signupPw } = this.state;

		API.user.signup(signupName, signupPw)
		.promise
		.then(res => {
			console.log(res);
		})
		.catch(res => {
			console.log(res);
		});
	}



	render () {
		return (
			<div className="login">
				<div className="login__disclaimer">
					We actually would perfer if you didn't have to make an account, but we have to fight spammers, so this is our most painless option.
				</div>
				<div className="login__signup">
					<form onSubmit={this.handleSignup}>
						<input type="text" value={this.state.signupName} onChange={this.handleChange} />
						<input type="password" value={this.state.signupPw} onChange={this.handleChange} />
						 <input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
