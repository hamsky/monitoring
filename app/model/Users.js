Ext.define('monitoring.model.Users', {
    extend: 'Ext.data.Model',
    fields: ['id', 'login', 'password', 'email', 'enabled', 'org', 'ulevel']
});

