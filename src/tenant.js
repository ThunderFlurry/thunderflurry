
/**
 * Get hostname of request.
 *
 * @param {object} req
 * @return {string}
 * @private
 */

function getHostName(req) {
	const host = req.headers.host;

	if (!host) {
		return;
	}

	const offset = host[0] === '['
		? host.indexOf(']') + 1
		: 0;
	const index = host.indexOf(':', offset);

	return index !== -1
		? host.substring(0, index)
		: host;
}

function getTenent(req) {
	const hostname = getHostName(req);

	// if hostname is ip address stop processing

	const parts = hostname.split('.');
	switch (parts.length) {
		case 0:
		case 1:
		case 2:
			return '';
		case 3:
			return parts[3];
		default:
			delete parts[1];
			delete parts[0];
			return parts.join('.');
	}
}


/**
 * Create tenantsplit middleware.
 *
 * @param {array|string} excludes
 * @param {function} handle
 * @return {function}
 * @public
 */

function tenant (excludes, handle) {
	if (!excludes) {
		throw new TypeError('argument excludes is required');
	}
	if (Object.prototype.toString.call(excludes) !== '[object Array]' && typeof excludes !== 'string') {
		throw new TypeError('argument excludes must be a string or array of strings');
	}
	if (!handle) {
		throw new TypeError('argument handle is required')
	}
	if (typeof handle !== 'function') {
		throw new TypeError ('argument handle must be a function');
	}
	const excluded = {}.concat(excludes);

	return function tenant(req, res, next) {
		const tenant = getTenent(req);

		// if ip return do not process
		if (!tenant || excluded.includes(tenant)) {
			return;
		}
		handle(req, res, next);
	};
}

export default tenant;
