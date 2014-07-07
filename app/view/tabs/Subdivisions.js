Ext.define('monitoring.view.tabs.Subdivisions', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.subdivisions',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'north',
            items: [
                {xtype: 'toolbar'}
            ]
        },
        {
            region: 'center',
            items: [{xtype: 'panel'}]
        }
    ]


});

