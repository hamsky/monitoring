Ext.define('monitoring.store.OrgTypeStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.OrgType',
    autoLoad: true,
    itemId: 'orgTypeStore',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'orgtypes'
        }, api: {
            read: 'app/php/actions/getorgtype.php',
            destroy: 'app/php/actions/deleteorgtype.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'orgtypes'
        }


    }
});
