/*
 * Dependencies
 */

// Vendors
import React from 'react';

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

	handleLogin () {
		console.log('fuck');
	}

	handleSignup () {
		console.log('fuck2');
	}



	render () {
		return (
			<div className="login">
				<div className="login__disclaimer">
					We actually would perfer if you didn't have to make an account, but we have to fight spammers, so this is our most painless option.
				</div>
				<div className="login__login">
					<form onSubmit={this.handleLogin}>
						<input type="text" value={this.state.login_name} onChange={this.handleChange} />
						<input type="password" value={this.state.login_pw} onChange={this.handleChange} />
					</form>
				</div>
				<div className="login__signup">
					<form onSubmit={this.handleSignup}>
						<input type="text" value={this.state.signup_name} onChange={this.handleChange} />
						<input type="password" value={this.state.signup_pw} onChange={this.handleChange} />
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
