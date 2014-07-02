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
            stateful: true,
            split: true,
            border:true,
//            style: {
//        border: '2px inset #B8B8B8'
//    },
            collapsible: true,
            items: [
                {xtype: 'actionlist'}
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
            title: '_',
            html: 'center'
        }

    ]
});


