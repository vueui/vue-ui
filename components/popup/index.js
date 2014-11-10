
/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./popup');
var Popup = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-popup', Popup);

module.exports = Popup;