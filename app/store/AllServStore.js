Ext.define('monitoring.store.AllServStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.AllServices',
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'services'
        }, api: {
            read: 'app/php/actions/getallservices.php',
            destroy: 'app/php/actions/deleteservice.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'services'
        }
    }
});


