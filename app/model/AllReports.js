Ext.define('monitoring.model.AllReports', {
    extend: 'Ext.data.Model',
    fields: ['id', 'date', 'service', 'value', 'complaints', 'gcompl', 'subdiv']
});