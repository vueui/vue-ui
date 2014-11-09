var mixins = require('../../helpers/mixins');

module.exports = {
    name: 'Checkbox',

    template: require('./checkbox.jade'),

    paramAttributes: ['type', 'name', 'checked', 'label', 'value'],

    compiled: function () {
        $(this.$$.checkbox).checkbox();
    },

    ready: function () {
        if(this.checked === 'checked') this.$check();
    },

    mixins: [
        mixins.appendToClassMixin,
        mixins.bindBehaviorsMixin
    ],

    data: function () {
        return {
            type: 'checkbox',
            disabled: false
        };
    },

    watch: {
        disabled: function (isDisabled) {
            isDisabled ? this.$disable() : this.$enable();
        }
    },

    behaviors: [
        'toggle',
        'check',
        'uncheck',
        'enable',
        'disable',
        'is checked',
        'is radio'
    ]
};
