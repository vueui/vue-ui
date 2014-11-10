
/**
 * transition definition
 *
 * @param {Object} settings - Animation settings to use
 */

module.exports = function (name) {

    return {
        enter: function (el, done) {
            $(el)
                .transition('reset')
                .transition(name + ' in', 700, done);

            return function() {
                $(el).transition('stop');
            }
        },

        leave: function (el, done) {
            $(el)
                .transition('reset')
                .transition(name + ' out', 700, done);

            return function() {
                $(el).transition('stop');
            }
        }
    };
};
