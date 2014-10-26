Ext.define('monitoring.view.tabs.Category', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.categorysv',
    store: 'CategoryStore',
    itemId: 'categoryGrid',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Категории сведений',
                dataIndex: 'category',
                flex: 60 / 100,
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
            tooltip: 'Добавить новую категорию',
            text: 'Добавить категорию',
            iconCls: 'page_white_add',
            itemId: 'addCategory'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'CategoryStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});

