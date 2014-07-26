Ext.define('monitoring.view.tabs.Iogv', {
    extend: 'Ext.grid.Panel',
    store: 'IogvStore',
    alias: 'widget.iogv',
    itemId: 'iogvGrid',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            clicksToMoveEditor: 1,
            autoCancel: false
        })],
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'ИОГВ',
                dataIndex: 'iogv',
                editor: {
                    xtype: 'textfield'
                },
                flex: 60 / 100
            }, {
                header: 'Руководитель',
                dataIndex: 'manage',
                editor: {
                    xtype: 'textfield'
                },
                flex: 20 / 100
            },
            {
                header: 'Тип',
                dataIndex: 'type',
                flex: 5 / 100,
                editor: {
                    xtype: 'combo',
                    store: 'OrgTypeStore',
                    displayField: 'name',
                    valueField: 'id'
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
                        }
                    }]

            }

        ];
        this.callParent(arguments);
    },
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Добавить ОМСУ',
            iconCls: 'page_white_add',
            itemId: 'omsuAdd'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'IogvStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});

