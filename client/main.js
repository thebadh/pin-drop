Accounts.ui.config({
    requestPermissions: {
        facebook: ['user_likes'],
        github: ['user', 'repo']
    },
    requestOfflineToken: {
        google: true
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.startup(function (){
    $('.ui.basic.modal').modal('show');
});

Template.body.events({
    'click .button': function (event) {
        console.log(event.target);
    }
});

Template.panel.events({
    'click .pin.icon': function (event) {
        if (!Meteor.call("hasMic", "name")) {
            Meteor.call("addMic", "name", "laptop");
        }
    },
});
