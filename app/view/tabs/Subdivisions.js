Ext.define('monitoring.view.tabs.Subdivisions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.subdivisions',
    store: 'SubdivisionsStore',
    frame: false,
    viewConfig: {
        forceFit: true
    },
    autoHeight: false,
    layout: 'fit',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {header: 'Подразделения', dataIndex: 'subdiv', flex: 90 / 100}
        ];
        this.callParent(arguments);
    },
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Добавить новое подразделение',
            iconCls: 'page_white_add'
        }
    ]


});

