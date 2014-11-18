
/**
 * Module dependencies
 */

var mixins = require('../../helpers/mixins');


/**
 *  <ui-select> definition
 */

module.exports = {
    name: 'Dropdown',

    paramAttributes: [ 'options', 'label', 'type', 'on', 'name' ],

    mixins: [ mixins.bindBehaviorsMixin ],

    compiled: function () {
        var $dropdown = $(this.$$.dropdown);

        $dropdown.addClass(this.type);
        $dropdown.dropdown({ on: this.on });
    },

    destroy: function () {
        $(this.$$.dropdown).dropdown('destroy');
    },

    data: function () {
        return {
            label: '',
            type: '',
            on: 'click',
            name: '',
            options: []
        };
    },

    computed: {
        selected: {
            get: function() {
                return $(this.$$.dropdown).dropdown('get value');
            },
            set: function (value) {
                $(this.$$.dropdown).dropdown('set value', value);
            }
        }
    },

    behaviors: [
        'toggle',
        'show',
        'hide'
    ],

    template: require('./dropdown.jade')
};
