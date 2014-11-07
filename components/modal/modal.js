/**
 * Module dependencies
 */

var Vue = require('vue');
var util = Vue.util;
var Dimmer = require('../dimmer');
var appendToClassMixin = require('../../helpers/mixins/appendToClass');
var onResizeMixin = require('../../helpers/mixins/onWindowResize');


/**
 *  <ui-modal> definition
 */

module.exports = {
    name: 'Modal',

    paramAttributes: ['title'],

    mixins: [appendToClassMixin, onResizeMixin],

    ready: function () {
        var vm = this;

        // If the modals page dimmer is not visible, hide this modal too
        vm.$parent.$on('hide', function () {
            vm.active = false;
        });
    },

    data: function () {
        return {
            title: '',
            active: false,
            height: 0,
            pageHeight: 0
        }
    },

    methods: {
        show: function () {
            this.$parent.show();
            this.active = true;

            // Refresh the modal after it is visible
            Vue.nextTick(this.refresh.bind(this));

            this.$emit('show');
        },

        hide: function (e) {
            this.$parent.hide();
            this.active = false;
            this.$emit('hide');

            if (e) e.stopPropagation();
        },

        toggle: function () {
            this.active ? this.hide() : this.show();

            this.$emit('toggle', this.active);
        },

        approve: function (e) {
            this.hide();
            this.$emit('approved');

            e.stopPropagation();
        },

        deny: function (e) {
            this.hide();
            this.$emit('denied');

            e.stopPropagation();
        },

        // UI helpers
        refresh: function (e) {
            var vm = this;
            var $modal = this.$$.modal;
            var $dimmable = this.$parent.getDimmable();

            if (vm.active) {
                vm.height = $modal.clientHeight;
                vm.pageHeight = $dimmable.clientHeight;
            }
        }
    },

    computed: {
        marginTop: function () {
            return -(this.height / 2)
        }
    },

    onResize: function (e) {
        this.refresh();

        e.stopPropagation();
    },

    template: require('./modal.jade')
};