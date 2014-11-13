Ext.define('monitoring.store.PersonsStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'org', 'initials', 'date_', 'email', 'phone', 'skype'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'persons'
        }, api: {
            read: 'app/php/actions/getpersons.php',
            destroy: 'app/php/actions/deleteperson.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'persons'
        }
    }
});
