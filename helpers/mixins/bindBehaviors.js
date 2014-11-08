

module.exports = {
    beforeCompile: function () {
        var vm = this;
        var behaviors = this.$options.behaviors || [];
        var moduleName = this.$options.name.toLowerCase();

        behaviors.forEach(function (behavior) {
            vm['$' + behavior] = $(vm.$el)[moduleName].bind($(vm.$el), behavior);
        });
    }
};