
/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./checkbox');
var Checkbox = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-checkbox', Checkbox);

module.exports = Checkbox;