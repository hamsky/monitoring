Ext.define('monitoring.store.SubdivisionsStore', {
    extend: 'Ext.data.Store',
    model: 'monitoring.model.Subdivisions',
    pageSize: 25,
    autoLoad:true,
    storeId:'subdivStore',
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getsubdiv.php', 
        reader: {
            type: 'json',
             rootProperty:'subdivisions'
        }
    }
});


