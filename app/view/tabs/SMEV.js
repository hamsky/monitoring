Ext.define('monitoring.view.tabs.SMEV', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.smev',
    store: 'SmevStore',
    itemId: 'smevGrid',
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Наименование сведений/документа',
                dataIndex: 'name',
                flex: 30 / 100,
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                header: 'ФОИВ, определяющие требования к формату предоставления сведений',
                dataIndex: 'name',
                flex: 30 / 100,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                header: 'Категория сведений',
                dataIndex: 'name',
                flex: 30 / 100,
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                header: 'Возможность предоставления в электронном виде',
                dataIndex: 'name',
                flex: 30 / 100,
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

