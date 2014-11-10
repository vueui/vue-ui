
/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./sidebar');
var Sidebar = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-sidebar', Sidebar);

module.exports = Sidebar;