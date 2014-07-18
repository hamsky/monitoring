Ext.create('monitoring.view.OrgType', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.orgtype',
    store: 'OrgTypeStorem',
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
    }
});


