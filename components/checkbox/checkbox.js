
var appendToClassMixin = require('../../helpers/mixins/appendToClass');

module.exports = {
    name: 'Checkbox',

    template: require('./checkbox.jade'),

    paramAttributes: [ 'type', 'name', 'checked', 'label', 'value' ],

    compiled: function () {
        var vm = this;

        switch (vm.type) {
            case 'checkbox':
                vm.checked = vm.checked === 'checked';
                break;
            case 'radio':
                var $parent = vm.$parent;

                vm.checked = vm.checked === 'checked' ? vm.value : '';

                if($parent) {
                    $parent.$watch(vm.name, function (value) {
                        vm.checked = value;
                    }, false, true);
                }
                break;
        }
    },

    mixins: [ appendToClassMixin ],

    data: function () {
        return {
            type: 'checkbox',
            checked: false,
            disabled: false
        };
    },

    methods: {
        toggle: function () {
            this.checked = !this.checked;
        },

        pick: function () {
            var vm = this;
            var name = this.name;

            if(vm.$parent) {
                vm.$parent[name] = vm.value;
            }
        },

        disable: function () {
            this.disabled = true;
        }
    }
};
