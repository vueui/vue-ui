
/**
 *  Module dependencies
 */

var utils = require('vue').util;
var appendToClassMixin = require('../../helpers/mixins/appendToClass');
var matches = require('../../helpers/utils').matches;


/**
 * <ui-dimmer> definition
 */

module.exports = {
    name: 'Dimmer',

    paramAttributes: ['message', 'on'],

    mixins: [appendToClassMixin],

    ready: function () {
        var vm = this;
        var $dimmable = this.getDimmable();
        var $dimmer = this.$$.dimmer;
        var hide = vm.hide.bind(vm);
        var show = vm.show.bind(vm);

        // show/hide dimmer on hover or click
        if(vm.on === 'hover') {
            $dimmable.addEventListener('mouseenter', show, false);
            $dimmer.addEventListener('mouseleave', hide, false);
            vm.$once('destroyed', function () {
                $dimmable.removeEventListener('mouseenter', show, false);
                $dimmer.removeEventListener('mouseleave', hide, false);
            });
        } else {
            $dimmer.addEventListener('click', hide, false);
            vm.$once('destroyed', function () {
                $dimmer.removeEventListener('click', hide, false);
            });
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
            var $dimmable = this.getDimmable();
            utils.addClass($dimmable, 'dimmed');

            this.visible = true;
            this.$emit('show');
        },

        hide: function (e) {
            // Determine if the event occured on the dimmer
            var selector = '.ui.dimmer, .ui.dimmer > .content, .ui.dimmer > .content > .center';

            if(e && !matches(e.target, selector)) {
                e.stopPropagation();
                return ;
            }

            var $dimmable = this.getDimmable();
            utils.removeClass($dimmable, 'dimmed');

            this.visible = false;
            this.$emit('hide');
        },

        toggle: function () {
            this.visible ? this.hide() : this.show();
            this.$emit('toggle', this.visible);
        },

        isPage: function () {
            return this.$$.dimmer.classList.contains('page');
        },

        getDimmable: function () {
            return this.isPage() ? document.body : this.$el.parentNode;
        }
    },

    template: require('./dimmer.jade')
};