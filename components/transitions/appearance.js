
/**
 *  Module dependencies
 */

var utils = require('./utils');
var addClasses = utils.addClasses;
var removeClasses = utils.removeClasses;


/**
 * transition definition
 *
 * @param {Object} settings - Animation settings to use
 */

module.exports = function (settings) {
    var onAnimationEnd = utils.onAnimationEnd.bind(settings);

    return {
        beforeEnter: function (el) {
            addClasses(el, 'transition visible');
        },

        enter: function (el, done) {
            addClasses(el, settings.enter);

            onAnimationEnd(el, done);
            return function() {
                removeClasses(el, settings.enter);
            }
        },

        leave: function (el, done) {
            addClasses(el, settings.leave);

            onAnimationEnd(el, done);
            return function() {
                removeClasses(el, settings.leave);
            }
        }
    };
};
