
/**
 * Register transitions using Vue.transition
 */

var Vue = require('vue');

var appearance = [{
    name: 'slide-up',
    enter: 'slide up in',
    leave: 'slide up out',
    in: 'slideIn',
    out: 'slideOut'
}, {
    name: 'slide-down',
    enter: 'slide down in',
    leave: 'slide down out',
    in: 'slideIn',
    out: 'slideOut'
}, {
    name: 'flip-vertical',
    enter: 'vertical flip in',
    leave: 'vertical flip out',
    in: 'verticalFlipIn',
    out: 'verticalFlipOut'
}, {
    name: 'flip-horizontal',
    enter: 'horizontal flip in',
    leave: 'horizontal flip out',
    in: 'horizontalFlipIn',
    out: 'horizontalFlipOut'
},{
    name: 'fade',
    enter: 'fade in',
    leave: 'fade out',
    in: 'fadeIn',
    out: 'fadeOut'
}, {
    name: 'fade-up',
    enter: 'fade up in',
    leave: 'fade up out',
    in: 'fadeUpIn',
    out: 'fadeUpOut'
}, {
    name: 'fade-down',
    enter: 'fade down in',
    leave: 'fade down out',
    in: 'fadeDownIn',
    out: 'fadeDownOut'
}, {
    name: 'scale',
    enter: 'scale in',
    leave: 'scale out',
    in: 'scaleIn',
    out: 'scaleOut'
}, {
    name: 'drop',
    enter: 'drop in',
    leave: 'drop out',
    in: 'dropIn',
    out: 'dropOut'
}, {
    name: 'browse',
    enter: 'browse in',
    leave: 'browse out',
    in: 'browseIn',
    out: 'browseOutLeft'
}, {
    name: 'browse-right',
    enter: 'browse in',
    leave: 'browse out right',
    in: 'browseIn',
    out: 'browseOutRight'
}];

// Register the appearance animations

appearance.forEach(function (settings) {
    var name = settings.name;
    var definition = require('./appearance')(settings);

    Vue.transition(name, definition);
});