/**
 * Module dependencies
 */

var mixins = require('../../helpers/mixins');


/**
 *  <ui-modal> definition
 */

module.exports = {
    name: 'Modal',

    paramAttributes: [ 'type', 'title', 'size' ],

    mixins: [
        mixins.bindBehaviorsMixin
    ],

    compiled: function () {
        var vm = this;

        $(this.$$.modal).modal({
            onApprove: function () {
                vm.$emit('approved');
            },
            onDeny: function () {
                vm.$emit('denied');
            }
        });
    },

    data: function () {
        return {
            title: '',
            type: 'standard',
            size: ''
        }
    },

    behaviors: [
		'show',
        'hide',
        'toggle',
        'is active'
    ],

    template: require('./modal.jade'),

    replace: true
};
