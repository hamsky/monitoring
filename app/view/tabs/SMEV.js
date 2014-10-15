Ext.define('monitoring.view.tabs.SMEV',{
 extend:'Ext.grid.Panel',
 store:'',
 alias:'widget.smev',
 itemId:'smevGrid',
     initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Услуга',
                dataIndex: 'service',
                flex: 60 / 100,
                editor: {
                    xtype: 'textfield',
                    readOnly: true
                }
            },
            {
                header: 'Подразделение предоставляющее услугу',
                dataIndex: 'subdiv',
                flex: 25 / 100,
                editor: {
                    xtype: 'combo',
                    store: 'SubdivisionsStore',
                    displayField: 'subdiv',
                    valueField: 'id',
                    pageSize: 10

                }
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
                            grid.store.reload();
                        }
                    }]

            }


        ];
        this.callParent(arguments);
    }
});


