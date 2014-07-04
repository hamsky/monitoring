Ext.define('monitoring.store.SubdivisionsStore', {
    extend: 'Ext.data.Store',
    model: 'Subdivisions',
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url: 'monitoring/actions/csubdiv.php', //!!
        reader: {
            type: 'json',
            root: 'subdivisions'
        }
    }
});


