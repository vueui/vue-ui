

module.exports = {
    compiled: function () {
        var vm = this;
        var behaviors = this.$options.behaviors || {};
        var moduleName = this.$options.name.toLowerCase();
        var $element = $(this.$$[moduleName]);

        // Register the behavior(method) as $behavior on the vm with before/after hooks
        $.each(behaviors, register);

        function register(behavior, settings) {
            var after = $.isFunction(settings.after) ? settings.after.bind(vm) : $.noop;
            var method = $element[moduleName].bind($element, behavior);
            var before = $.isFunction(settings.before) ? settings.before.bind(vm) : $.noop;

            vm['$' + behavior] = function() {
                var args = arguments;
                var done = function () {
                    method.apply($element, args);
                    after();
                };

                if (before !== $.noop) before(done);
                else done();
            }
        }

    }
};