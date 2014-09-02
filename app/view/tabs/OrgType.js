Ext.define('monitoring.view.tabs.OrgType', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.orgtype',
    store: 'OrgTypeStore',
    itemId: 'orgTypeGrid',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Тип',
                dataIndex: 'name',
                editor: {
                    xtype: 'textfield'
                },
                flex: 95 / 100
            },
            {
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
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Добавить новый тип ведомства',
            iconCls: 'page_white_add',
            itemId: 'addOrgType'
        }
    ]
});


