Ext.define('monitoring.view.tabs.Foiv', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.foivs',
    store: 'FoivStore',
    itemId: 'foivsGrid',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'ФОИВ',
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
            tooltip: 'Добавить новый ФОИВ',
            text: 'Добавить ФОИВ',
            iconCls: 'page_white_add',
            itemId: 'addVariant'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'FoivStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});




