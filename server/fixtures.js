Meteor.startup(function () {
  if (Accounts.loginServiceConfiguration.find({service: 'google'}).count() === 0) {
    Accounts.loginServiceConfiguration.insert({
      service: 'google',
      clientId: Meteor.settings.Google.clientId,
      secret: Meteor.settings.Google.secret,
    });
  }
  if (Accounts.loginServiceConfiguration.find({service: 'github'}).count() === 0) {
    Accounts.loginServiceConfiguration.insert({
      service: 'github',
      clientId: Meteor.settings.GitHub.clientId,
      secret: Meteor.settings.GitHub.secret,
    });
  }
  if (Accounts.loginServiceConfiguration.find({service: 'facebook'}).count() === 0) {
    Accounts.loginServiceConfiguration.insert({
      service: 'facebook',
      appId: Meteor.settings.Facebook.appId,
      secret: Meteor.settings.Facebook.secret,
    });
  }
});
