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
                dataIndex: 'foiv',
                flex: 30 / 100,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                header: 'Категория сведений',
                dataIndex: 'category',
                flex: 30 / 100,
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                header: 'Возможность предоставления в электронном виде',
                dataIndex: 'type_',
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
            tooltip: 'Отметьте сведения/документы, которые организация может предоставить',
            text: 'Добавить сведение/документ',
            iconCls: 'page_white_add',
            itemId: 'addInfSmev'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'SmevStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});

