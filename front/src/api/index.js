/*
 * Dependencies
 */
import superagent from 'superagent';

/*
 * Endpoints
 */
import getChampApi from './endpoints/champ.js';

/*
 * CLIENT
 * ======
 */
function API () {

	/*
	 * Exec
	 * --
	 * Makes an XHR with given xhrConfig
	 *
	 * @param {Object} xhrConfig - a config to be passed to superagent
	 * @return {Promise} from .exec
	 */
	function exec (xhrConfig) {

		const { method, data, query, formData } = xhrConfig;
		const url = 'http://localhost:8080/api' + xhrConfig.url;
		const req = superagent[method.toLowerCase()](url); // Create request object


		// POST/PUT data
		if (data) {
			req.send(data);
		}

		// POST/PUT form data
		if (formData) {
			const fd = new FormData();

			Object.keys(formData).forEach(key => {
				fd.append(key, formData[key]);
			});

			req.send(fd);
		}

		// Pass query params
		req.query(query);

		const promise = new Promise((resolve, reject) => {
			req.end((err, res) => {
				// Success
				console.log(res);
				if (res && res.ok) {
					resolve({
						status: res.status,
						data: res.body
					});
				}
				// Proper error
				else if (res && res.body) {
					reject({
						status: res.status,
						data: res.body
					});
				}
				// Unhandled response or nginx error
				else {
					reject({
						status: res ? res.status || 500 : 500,
						data: {
							errors: [{
								code: 'ERR.UNKNOWN',
								type: 'global'
							}]
						}
					});
				}

			});
		});

		return {
			promise: promise,
			abort: req.abort.bind(req)
		};
	}

	/*
	 * Expose API
	 */
	return {
		champ: getChampApi(exec)
	};

}

export default API();
