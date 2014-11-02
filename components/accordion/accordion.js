
var appendToClassMixin = require('../../helpers/mixins/appendToClass');

module.exports = {
    name: 'Accordion',

    paramAttributes: [ 'active' ],

    mixins: [ appendToClassMixin ],

    template: require('./accordion.jade'),

    compiled: function () {

    },

    data: function () {
        return {
            sections: [{
                title: 'test',
                content: 'test'
            }, {
                title: 'two',
                content: 'three'
            }],
            active: 0
        };
    },

    methods: {
        toggle: function (index) {
            this.active = index;
        },

        isActive: function (index) {
            return index === this.active;
        }
    }
};