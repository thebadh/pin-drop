Accounts.ui.config({
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
