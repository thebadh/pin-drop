/**
 * Created by Barbara on 10/10/2015.
 */
Template.panel.helpers({
    pos: function() {
        var region = $('.threshold')[0];
        console.log($('.threshold').get(0));
        console.log(region);
        if (region) {
            var pos = region.getBoundingClientRect();
            console.log(pos);
            return {left: pos.left, top: pos.top};
        } else {
            return null;
        }
    }
});

Template.panel.events({
    'click .pin.icon': function (event) {
        if (!Meteor.call("hasMic", "name")) {
            Meteor.call("addMic", "name", "laptop");
        }
    }
});