Ext.define('monitoring.store.OrgInfoStore',{
    extend:'Ext.data.Store',
        model: 'monitoring.model.OrgInfo',
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getallorg.php',
        reader: {
            type: 'json',
            rootProperty: 'iogvlist'
        }
    }
});