Ext.define('monitoring.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border',
        padding: 4
    }, items: [
        {
            bodyPadding: 0,
            region: 'west',
            title: 'Меню',
            minWidth: 250,
            width: 250,
            layout: 'fit',
            split: true,
            border: true,
            collapsible: true,
            items: [
                {
                    xtype: 'actionlist'
                }
            ]
        },
        {
            region: 'north',
            items: [
                {xtype: 'mheader'}
            ]
        },
        {
            region: 'center',
            layout: 'fit',
            items: [
                {
                    xtype: 'workarea'
                }
            ]
        }

    ]
});


