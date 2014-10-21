Ext.define('monitoring.store.SmevStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name', 'foiv', 'category', 'type_'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'infsmev'
        }, api: {
            read: 'app/php/actions/getinfsmev.php',
            destroy: 'app/php/actions/deleteinfsmev.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'infsmev'
        }
    }
});
