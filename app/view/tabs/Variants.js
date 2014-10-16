Ext.define('monitoring.view.tabs.Variants', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.variantsv',
    store: 'VariantStore',
    itemId: 'variantsGrid',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Возможность предоставления в электронном виде',
                dataIndex: 'type_',
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
            tooltip: 'Добавить новый вариант',
            text: 'Добавить вариант',
            iconCls: 'page_white_add',
            itemId: 'addVariant'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'VariantStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});




