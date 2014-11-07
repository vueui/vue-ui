
/**
 * A mixin used to attach a listener($options.onResize) to the 'resize' window event
 */

module.exports = {
    ready: function () {
        var onResize = this.$options.onResize;

        if(onResize && window) {
            onResize = this.$options.onResize = onResize.bind(this);

            this.$watch('active', function (isActive) {
                isActive
                    ? window.addEventListener('resize', onResize, false)
                    : window.removeEventListener('resize', onResize, false);
            });
        }
    },

    destroyed: function () {
        var onResize = this.$options.onResize;

        if(onResize && window) {
            window.removeEventListener('resize', onResize, false);
        }
    }
};