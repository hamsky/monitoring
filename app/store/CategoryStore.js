Ext.define('monitoring.store.CategoryStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['id', 'category'],
    pageSize: 30,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'category'
        }, api: {
            read: 'app/php/actions/getcategory.php',
            destroy: 'app/php/actions/deletecategory.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'category'
        }
    }
});


