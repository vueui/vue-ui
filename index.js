

exports.install = function (Vue) {

    require('./components/transitions')(Vue);

    /**
     * Components
     */

    var Accordion = Vue.extend(require('./components/accordion'));
    var Checkbox = Vue.extend(require('./components/checkbox'));
    var Dropdown = Vue.extend(require('./components/dropdown'));
    var Modal = Vue.extend(require('./components/modal'));
    var Popup = Vue.extend(require('./components/popup'));
    var Progress = Vue.extend(require('./components/progress'));
    var Rating = Vue.extend(require('./components/rating'));
    var Sidebar = Vue.extend(require('./components/sidebar'));


    /**
     * Register components globally
     */

    Vue.component('ui-accordion', Accordion);
    Vue.component('ui-checkbox', Checkbox);
    Vue.component('ui-dropdown', Dropdown);
    Vue.component('ui-modal', Modal);
    Vue.component('ui-popup', Popup);
    Vue.component('ui-progress', Progress);
    Vue.component('ui-rating', Rating);
    Vue.component('ui-sidebar', Sidebar);

};