
/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./dropdown');
var Dropdown = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-dropdown', Dropdown);

module.exports = Dropdown;