
module.exports = {
    paramAttributes: [ 'class' ],

    compiled: function () {
        var vm = this;
        var componentName = this.$options.name.toLowerCase();

        if(vm.class) {
            var $element = vm.$el.querySelector('.ui.' + componentName);
            $element.className += ' ' + vm.class;
        }
    }
};