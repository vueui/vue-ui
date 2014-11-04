
/**
 * Load the CSS for this component
 */

require('../../semantic-ui/dist/components/rating.css');


/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./rating');
var Rating = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-rating', Rating);

module.exports = Rating;