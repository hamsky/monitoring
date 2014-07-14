Ext.define('js.monapp.OrgInfoStore', {
    extend: 'Ext.data.Store',
    model: 'js.monapp.OrgInfo',
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getallorg.php',
        reader: {
            type: 'json',
            rootProperty: 'iogvlist'
        }
    }
});