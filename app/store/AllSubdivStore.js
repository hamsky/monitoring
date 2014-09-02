Ext.define('monitoring.store.AllSubdivStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'subdiv', 'org'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'subdivisions'
        }, api: {
            read: 'app/php/actions/getasubdiv.php',
            destroy: 'app/php/actions/deleteasubdiv.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'subdivisions'
        }
    }
});