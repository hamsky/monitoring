Ext.define('monitoring.store.VariantStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'type_'],
    pageSize: 30,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'variants'
        }, api: {
            read: 'app/php/actions/getvariants.php',
            destroy: 'app/php/actions/deletevariants.php'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            allowSingle: false,
            encode: true,
            rootProperty: 'variants'
        }
    }
});