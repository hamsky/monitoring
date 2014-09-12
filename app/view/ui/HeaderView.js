Ext.define('monitoring.view.ui.HeaderView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mheader',
    border: true,
    height: 50,
    items: [{
            xtype: 'label',
            itemId: 'orgName',
            text: ' ',
            style: {
                float: 'left',
                'font-size': '17px',
                top: '15px',
                margin: '11px 0 0 5px',
                heigt: '50px'

            }
        },
        {
            xtype: 'button',
            text: 'Выход',
            iconCls: 'logout',
            itemId: 'logout',
            style: {
                float: 'right',
                margin: '13px 5px 0 0'
            }
        }
    ]

});