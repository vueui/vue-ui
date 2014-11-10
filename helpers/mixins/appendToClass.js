
module.exports = {
    paramAttributes: [ 'class' ],

    compiled: function () {
        var vm = this;
        var componentName = this.$options.name.toLowerCase();

        if(vm.class) {
            var $element = $(vm.$el).find('.ui.' + componentName) || $(vm.$el);
            $element.addClass(vm.class);
        }
    }
};