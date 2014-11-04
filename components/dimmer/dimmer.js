
/**
 *  Module dependencies
 */

var utils = require('vue').util;
var appendToClassMixin = require('../../helpers/mixins/appendToClass');


/**
 * <ui-dimmer> definition
 */

module.exports = {
    name: 'Dimmer',

    paramAttributes: ['message', 'on'],

    mixins: [appendToClassMixin],

    ready: function () {
        var vm = this;
        var $dimmable = this.$el.parentNode;
        var $dimmer = this.$el.querySelector('.ui.dimmer');
        var toggle = vm.toggle.bind(vm);
        var hide = vm.hide.bind(vm);
        var show = vm.show.bind(vm);

        // show/hide dimmer on hover or click
        switch (vm.on) {
            case 'click':
                $dimmable.addEventListener('click', toggle);
                vm.$once('destroyed', function () {
                   $dimmable.removeEventListener('click', toggle);
                });
                break;
            case 'hover':
                $dimmable.addEventListener('mouseenter', show);
                $dimmer.addEventListener('mouseleave', hide);
                vm.$once('destroyed', function () {
                    $dimmable.removeEventListener('mouseenter', show);
                });
                break;
        }
    },

    destroyed: function () {
        this.$emit('destroyed');
    },

    data: function () {
        return {
            visible: false,
            message: '',
            on: 'click'
        };
    },

    methods: {
        show: function () {
            var $dimmable = this.$el.parentNode;
            utils.addClass($dimmable, 'dimmed');

            this.visible = true;
        },

        hide: function () {
            var $dimmable = this.$el.parentNode;
            utils.removeClass($dimmable, 'dimmed');

            this.visible = false;
        },

        toggle: function () {
            this.visible ? this.hide() : this.show();
        }
    },

    template: require('./dimmer.jade')
};