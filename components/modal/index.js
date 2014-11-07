
/**
 * Load the CSS for this component
 */

require('../../semantic-ui/dist/components/modal.css');


/**
 * Component dependencies
 */

var Vue = require('vue');
var componentOptions = require('./modal');
var Modal = Vue.extend(componentOptions);

// Register the component globally
Vue.component('ui-modal', Modal);

module.exports = Modal;