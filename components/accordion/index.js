
/**
 * Load the CSS for this component
 */

require('../../semantic-ui/dist/components/accordion.css');


/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./accordion');
var Accordion = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-accordion', Accordion);

module.exports = Accordion;