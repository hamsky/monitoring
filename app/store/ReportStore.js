Ext.define('moniroring.store.ReportStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'monitoring.model.Report',
    fields: ['id', 'date', 'service', 'value', 'complaints'],
    groupField: 'service',
    proxy: {
        type: 'ajax',
        url: 'app/php/actions/getuservices.php',
        reader: {
            type: 'json',
            root: 'services'
        }

    }

});


