
/**
 * Module dependencies
 */

var Vue = require('vue');
var appendToClassMixin = require('../../helpers/mixins/appendToClass');


/**
 * <ui-progress> definition
 */

module.exports = {
    name: 'Progress',

    paramAttributes: [ 'value', 'total' ],

    mixins: [ appendToClassMixin ],

    compiled: function () {
        var vm = this;

        if(vm.value) vm.value = parseInt(vm.value, 10);
        if(vm.total) vm.total = parseInt(vm.total, 10);
    },

    data: function () {

        return {
            autoDestroy: true,
            autoStatus: true,
            isActive: false,
            status: '',
            value: 10,
            total: 100
        };
    },

    methods: {
        increment: function (value) {
            var vm = this;
            var increment = value || 1;
            var newValue = vm.value + increment;

            if(newValue <= vm.total) vm.value = newValue;
            else console.warn('Value cannot increment above total', vm.total);
        },

        decrement: function (value) {
            var vm = this;
            var decrement = value || 1;
            var newValue = vm.value - decrement;

            if(newValue > -1) vm.value = newValue;
            else console.warn('Value cannot decrement under 0');
        }
    },

    computed: {
      progress: function () {
          return Math.round((this.value / this.total) * 100);
      }
    },

    watch: {
        'value === total': function () {
            var vm = this;

            // Set the status to be 'success' by default
            if(vm.autoStatus) vm.status = "success";

            vm.isActive = false;
            vm.$emit('completed');

            // Destroy the component when it reaches to the 'completed' stage
            if(vm.autoDestroy) {
                Vue.nextTick(function () {
                    vm.$destroy();
                });
            }
        }
    },

    template: require('./progress.jade')
};