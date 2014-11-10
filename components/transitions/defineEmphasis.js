
/**
 * transition definition
 *
 * @param {Object} settings - Animation settings to use
 */

module.exports = function (name) {

    return {
        beforeEnter: function (el) {
            $(el).show();
        },

        enter: function (el, done) {
            $(el).transition(name, 700, done);

            return function() {
                $(el).transition('stop');
            }
        },

        leave: function (el, done) {
            $(el)
                .transition('reset')
                .transition(name, 700, done)
                .hide();

            return function() {
                $(el).transition('stop');
            }
        }
    };
};
