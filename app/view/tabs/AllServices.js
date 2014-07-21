Ext.define('monitoring.view.tabs.AllServices', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allservices',
    store: 'AllServStore',
    itemId: 'AllServices',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Услуга',
                dataIndex: 'service',
                editor: {
                    xtype: 'textfield'
                },
                flex: 90 / 100
            }, {
                xtype: 'actioncolumn',
                flex: 5 / 100,
                header: 'Действия',
                items: [
                    {
                        iconCls: 'delete',
                        tooltip: 'Удалить',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            grid.store.remove(rec);
                            grid.store.sync();
                        }
                    }]

            }

        ];
        this.callParent(arguments);
    },
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'AllServStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    },
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Добавить новую услугу',
            iconCls: 'page_white_add',
            itemId: 'addServiceA'
        }
    ]
});

