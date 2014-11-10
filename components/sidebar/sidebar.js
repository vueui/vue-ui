
/**
 * Module dependencies
 */

var mixins = require('../../helpers/mixins');


/**
 *  <ui-sidebar> definition
 */

module.exports = {
    name: 'Sidebar',

    paramAttributes: [ 'transition', 'direction', 'dimPage' ],

    compiled: function () {
        this.dimPage = this.dimPage ? true : false;

        $(this.$$.sidebar).sidebar({
            transition: this.transition,
            dimPage: this.dimPage
        });
    },

    data: function () {
        return {
            transition: 'push',
            direction: 'left',
            dimPage: false
        }
    },

    mixins: [
        mixins.appendToClassMixin,
        mixins.bindBehaviorsMixin
    ],

    behaviors: [ 'show', 'hide', 'toggle' ],

    template: require('./sidebar.jade')
};