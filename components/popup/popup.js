
/**
 * <ui-popup> definition
 */

module.exports = {
    name: 'Popup',

    paramAttributes: [ 'title', 'content', 'on', 'position', 'variation' ],

    compiled: function () {
        $(this.$el).addClass(this.variation);
    },

    ready: function () {
        var vm = this;
        var $activator = $(vm.$el).prev();

        $activator.popup({
            popup: $(vm.$el),
            position: vm.position,
            on: vm.on
        });

        // Bind behavior
        vm.$toggle = $activator.popup.bind($activator, 'toggle');
        vm.$show = $activator.popup.bind($activator, 'show');
        vm.$hide = $activator.popup.bind($activator, 'hide');
        vm.$isVisible = $activator.popup.bind($activator, 'is visible');
        vm.$remove = function () {
            $activator.popup('remove');
            vm.$destroy();
        };
    },

    data: function () {
        return {
            position: 'top right',
            on: 'hover',
            variation: '',
            title: '',
            content: ''
        };
    },

    template: require('./popup.jade'),

    replace: true
};