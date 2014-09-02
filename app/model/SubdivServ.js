Ext.define('monitoring.model.SubdivServ', {
    extend: 'Ext.data.Model',
    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'service'
        },
        {
            type: 'string',
            name: 'subdiv'
        }
    ]

});