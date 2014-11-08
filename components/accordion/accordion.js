
var mixins = require('../../helpers/mixins');

module.exports = {
    name: 'Accordion',

    paramAttributes: [ 'active' ],

    mixins: [
        mixins.appendToClassMixin,
        mixins.bindBehaviorsMixin
    ],

    template: require('./accordion.jade'),

    beforeCompile: function () {
        $(this.$el).accordion();
    },

    compiled: function () {
        if(this.active) this.active = parseInt(this.active, 10);
    },

    data: function () {
        return {
            sections: [],
            active: 0
        };
    },

    behaviors: [ 'open', 'close', 'toggle' ]

};