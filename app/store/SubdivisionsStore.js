Ext.define('monitoring.store.SubdivisionsStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.Subdivisions',
    pageSize: 25,
    autoLoad: true,
    storeId: 'subdivStore',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'subdivisions'
        }, api: {
            read: 'app/php/actions/getsubdiv.php',
            destroy: 'app/php/actions/deletesubdiv.php'
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


