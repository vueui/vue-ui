
var appendToClassMixin = require('../../helpers/mixins/appendToClass');

module.exports = {
    name: 'Accordion',

    paramAttributes: [ 'active' ],

    mixins: [ appendToClassMixin ],

    template: require('./accordion.jade'),

    compiled: function () {
        if(this.active) this.active = parseInt(this.active, 10);
    },

    data: function () {
        return {
            sections: [],
            active: -1
        };
    },

    methods: {
        toggle: function (index) {
            this.active = index === this.active ? -1 : index;
        },

        isActive: function (index) {
            return index === this.active;
        }
    }
};