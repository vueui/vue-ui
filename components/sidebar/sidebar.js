
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
		var $sidebar = $(this.$$.sidebar);
        this.dimPage = this.dimPage ? true : false;

        $sidebar.sidebar({
            transition: this.transition,
            dimPage: this.dimPage
        });
		
		if(this.class) $sidebar.addClass('ui sidebar');
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

    template: require('./sidebar.jade'),

	replace: true
};
