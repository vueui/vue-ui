
/**
 *  Module dependencies
 */

var util = require('vue').util;


/**
 *  Handle onanimationend for 'el'
 * @param el
 * @param {Function} done
 * @context settings - A settings object containing metadata about the animation
 */

function onAnimationEnd(el, done) {
    var animationend = util.animationEndEvent;
    var settings = this;

    var onEnd = function (e) {
        var animationName = e.animationName;

        switch (animationName) {
            case settings.in:
                // the 'enter' animation finished
                removeClasses(el, settings.enter + ' animating');
                break;
            case settings.out:
                // the 'leave' animation finished
                removeClasses(el, settings.leave + ' animating visible');
                break;
        }

        // Remove the animationend event
        el.removeEventListener(animationend, onEnd);

        done();
    };

    el.addEventListener(animationend, onEnd);
}


/**
 * Remove classes from el
 * @param el
 * @param {String} classes
 */

function removeClasses(el, classes) {
    classes = classes.split(' ');
    classes.forEach(util.removeClass.bind(el, el));
}


/**
 * Add a set of classes to the el
 * @param el
 * @param {String} classes
 */

function addClasses(el, classes) {
    classes = classes.split(' ');
    classes.forEach(util.addClass.bind(el, el));
}


/**
 * exports
 */

exports.onAnimationEnd = onAnimationEnd;
exports.addClasses = addClasses;
exports.removeClasses = removeClasses;