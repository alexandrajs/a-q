/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";

/**
 *
 * @constructor
 */
function Tasqu() {
	this.queue = Promise.resolve();
}

/**
 *
 * @param {Function} task
 * @returns {Promise}
 */
Tasqu.prototype.push = function push(task) {
	return this.queue = this.queue.then(() => task());
};
module.exports = Tasqu;
