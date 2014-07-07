Ext.define('monitoring.view.tabs.Subdivisions', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.subdivisions',
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    items: [
        {
            xtype: 'toolbar',
            height:30,
            border:false
        
        },
        {
            xtype: 'panel',
            border:false
        }
    ]

});

