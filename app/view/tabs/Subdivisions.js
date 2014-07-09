Ext.define('monitoring.view.tabs.Subdivisions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.subdivisions',
    store: 'SubdivisionsStore',
    frame: false,
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
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'SubdivisionsStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});

