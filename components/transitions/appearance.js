
/**
 *  Module dependencies
 */

var utils = require('./utils');


/**
 * transition definition
 *
 * @param {String} name - Animation name to use
 */

module.exports = function (settings) {
    var onAnimationEnd = utils.onAnimationEnd.bind(settings);
    var addClass = utils.addClass;

    return {
        beforeEnter: function (el) {
            addClass(el, 'transition visible');
        },

        enter: function (el, done) {
            addClass(el, settings.enter);

            onAnimationEnd(el, done);
        },

        leave: function (el, done) {
            addClass(el, settings.leave);

            onAnimationEnd(el, done);
        }
    };
};
