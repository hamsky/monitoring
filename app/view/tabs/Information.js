Ext.define('monitoring.view.tabs.Information', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.information',
    store: 'InfStore',
    itemId: 'infoGrid',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Наименование сведений/документа',
                dataIndex: 'name',
                flex: 70 / 100,
                editor: {
                    xtype: 'textfield'
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
    },
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Добавить новое сведение/документ',
            text: 'Добавить сведение',
            iconCls: 'page_white_add',
            itemId: 'addInformation'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'InfStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});




