App.ApplicationStore = DS.Store.extend();

App.ApplicationAdapter = DS.SailsSocketAdapter.extend({
    namespace: 'api',
    log: true
});