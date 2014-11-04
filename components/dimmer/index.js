
/**
 * Load the CSS for this component
 */

require('../../semantic-ui/dist/components/dimmer.css');


/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./dimmer');
var Dimmer = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-dimmer', Dimmer);

module.exports = Dimmer;