
/**
 * Load the CSS for this component
 */

require('../../semantic-ui/dist/components/progress.css');


/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./progress');
var Progress = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-progress', Progress);

module.exports = Progress;