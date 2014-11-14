
/**
 * Register transitions using Vue.transition
 */

var defineEmphasis = require('./defineEmphasis');
var defineAppearance = require('./defineAppearance');

var emphasis = [
    'flash',
    'shake',
    'pulse',
    'tada',
    'bounce'
];

var appearance = [
    'slide up',
    'slide down',
    'vertical flip',
    'horizontal flip',
    'fade',
    'fade up',
    'fade down',
    'scale',
    'drop',
    'browse'
];


/**
 * Register all transitions globally
 * @param Vue
 */

module.exports = function (Vue) {

    emphasis.forEach(function (animation) {
        var definition = defineEmphasis(animation);

        Vue.transition(animation, definition);
    });

    appearance.forEach(function (animation) {
        var definition = defineAppearance(animation);
        var id = animation.split(' ').join('-');

        Vue.transition(id, definition);
    });

};

