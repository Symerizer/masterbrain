App.ApplicationStore = DS.Store.extend();

App.ApplicationAdapter = DS.SailsRESTAdapter.extend({
    namespace: 'api',
    log: true
});