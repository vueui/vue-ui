
var mixins = require('../../helpers/mixins');

module.exports = {
    name: 'Accordion',

    paramAttributes: [ 'active' ],

    mixins: [
        mixins.appendToClassMixin,
        mixins.bindBehaviorsMixin
    ],

    template: require('./accordion.jade'),

	compiled: function() {
		if(this.active) this.active = parseInt(this.active, 10);
		$(this.$$.accordion).accordion();
	},

    data: function () {
        return {
            sections: [],
            active: -1
        };
    },

    behaviors: [ 'open', 'close', 'toggle' ]

};
