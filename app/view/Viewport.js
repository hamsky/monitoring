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
                    //  xtype: 'actionlist'
                    xtype: 'panel',
                    itemId: 'accord',
                    layout: {
                        type: 'accordion',
                        autoWidth: true,
                        animate: true,
                        autoScroll: true
                    },
                    items: [
                        {
                            xtype: 'actionlist',
                            //iconCls: 'monlogo',
                            title: '<b>Мониторинг</b>'
                        }
                    ]
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


