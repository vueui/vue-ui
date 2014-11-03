var Vue = require('vue');
var UI = require('..');
var Progress = UI.Progress;
var Accordion = UI.Accordion;

window.app = new Vue({
    el: '#app'
});


/**
 * <ui-accordion> example
 */

window.accordion = app.$.accordion;
accordion.sections = [{
    title: 'Google',
    content: 'http://google.com'
}, {
    title: 'Facebook',
    content: 'http://facebook.com'
}];


/**
 * <ui-progress> examples
 */

window.progress = app.$.progress;

function onUploaded() {
    var $label = this.$el.querySelector('.label');
    $label.textContent = 'Added ' + this.value + ' photos';

    console.log('Photos uploaded!');
}

progress.$once('completed', onUploaded);
progress.$watch('status', function (status) {
    console.log('File uploading status: ', status);
});

window.transcoding = new Progress({
    el: '#transcoder',
    data: {
        autoStatus: false
    }
});

transcoding.$once('completed', function () {
    console.log('Done transcoding the video.');
});