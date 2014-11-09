
/**
 * Module dependencies
 */

var appendToClassMixin = require('../../helpers/mixins/appendToClass');


/**
 *  <ui-rating> definition
 *  TODO: Re-implment disable such that events are turned off instead of just locking changes, for better performance
 */

module.exports = {
    name: 'Rating',

    paramAttributes: [ 'rating', 'max' ],

    mixins: [ appendToClassMixin ],

    compiled: function () {
        if(this.rating) this.rating = parseInt(this.rating, 10);
        if(this.max) this.max = parseInt(this.max, 10);

        for(var i = 1; i <= this.max; i += 1) {
            this.icons.push(i);
        }
    },

    data: function () {
        return {
            type: 'star',
            rating: 0,
            max: 5,
            selected: 0,
            disabled: false,
            icons: []
        }
    },

    methods: {
        $setRating: function (value) {
            if(value > this.max) return console.warn('Rating cannot exceed ', this.max);
            if(!this.disabled) this.rating = value;
        },

        $select: function (value) {
            if(!this.disabled) this.selected = value;
        }
    },

    template: require('./rating.jade')
};