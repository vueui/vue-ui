var Vue = require('vue');
var UI = require('..');
var Progress = UI.Progress;
var Accordion = UI.Accordion;

window.app = new Vue({
    el: '#app',
    data: {
        favoriteCat: 'Catty',

        selectOptions: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female'}
        ],

        showName: false,
        players: [ ],
        teams: [ ]
    }
});

/**
 * Transition triggers
 */

setTimeout(function () {
    app.players.push('mascherano');
    app.teams.push('F.C. Barcelona');

    setTimeout(function () {
        app.players.push('pique');
        app.teams.push('Chelsea');

        setTimeout(function () {
            app.players.push('xavi');
            app.teams.push('Borussia Dortmund');

        }, 1000);
    }, 1000);
}, 1000);


/**
 * <ui-sidebar>
 */

window.sidebar = app.$.sidebar;


/**
 * <ui-popup>
 */

window.popup = app.$.popup;


/**
 * <ui-dropdown>
 */

window.select = app.$.select;


/**
 * <ui-modal>
 */

window.confirmation = app.$.confirmation;
confirmation.$on('approved', function () {
    console.log('User confirmed through the modal.');
});

confirmation.$on('denied', function () {
    console.log('User denied confirming through the modal.');
});

window.error = app.$.error;

/**
 * <ui-rating>
 */

window.rating = app.$.rating;
window.starsRating = app.$.starsRating;


/**
 * <ui-checkbox> examples
 */

window.checkbox = app.$.checkbox;
checkbox.$watch('checked', function (checked) {
    console.log('Checkbox checked? ', checked);
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