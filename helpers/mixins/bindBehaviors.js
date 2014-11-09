

module.exports = {
    compiled: function () {
        var vm = this;
        var behaviors = this.$options.behaviors || {};
        var moduleName = this.$options.name.toLowerCase();
        var $element = $(this.$$[moduleName]);

        // Register the behavior(method) as $behavior on the vm, with optional before/after hooks
        $.each(behaviors, function (index, behavior) {
            if($.isPlainObject(behavior)) {
                register(behavior);
            } else if(typeof behavior === 'string') {
                var methodName = camelize(behavior);
                vm['$' + methodName] = $element[moduleName].bind($element, behavior);
            }
        });

        function register(settings) {
            var behavior = settings.name;
            var after = $.isFunction(settings.after) ? settings.after.bind(vm) : $.noop;
            var method = $element[moduleName].bind($element, behavior);
            var before = $.isFunction(settings.before) ? settings.before.bind(vm) : function(done){ done() };

            vm['$' + behavior] = function() {
                var args = arguments;
                var done = function () {
                    method.apply($element, args);
                    after();
                };

                before(done);
            }
        }

    }
};

function camelize(behavior) {
    var result = '';
    behavior.split(' ').forEach(function (word, i) {
        i === 0
            ? result += word
            : result += word.charAt(0).toUpperCase() + word.substring(1);
    });
    return result;
}