Ext.define('monitoring.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.Users',
    fields: ['id', 'login', 'password', 'email', 'enabled', 'org', 'ulevel'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }, api: {
            read: 'app/php/actions/getusers.php',
            destroy: 'app/php/actions/deleteuser.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'users'
        }
    }
});


