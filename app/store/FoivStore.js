Ext.define('monitoring.store.FoivStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'foivs'
        }, api: {
            read: 'app/php/actions/getfoiv.php',
            destroy: 'app/php/actions/deletefoiv.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'foivs'
        }
    }
});