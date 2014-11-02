var Vue = require('vue');
var Progress = require('..').Progress;
var Accordion = require('..').Accordion;

window.app = new Vue({
    el: '#app'
});


/**
 * <ui-accordion> examples
 */

window.accordion = app.$.accordion;


/**
 * <ui-progress> examples
 */

window.progress = app.$.progress;

function onUploaded() {
    console.log('File uploaded!');
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