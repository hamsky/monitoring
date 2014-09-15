Ext.define('monitoring.view.tabs.Services', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.services',
    store: 'SubdivServStore',
    itemId: 'servGrid',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            clicksToMoveEditor: 1,
            autoCancel: false,
            listeners: {
                canceledit: function(editor, e, eOpts) {
                    console.log('cancel edit');
                },
                edit: function(editor, e, eOpts) {
                    console.log('edit');
                    Ext.Ajax.request({
                        url: 'app/php/actions/usubdivedit.php',
                        params: e.record.getData(),
                        success: function(response, options) {
                            e.record.commit();
                            Ext.ComponentQuery.query('#servGrid')[0].getStore().reload();
                        }

                    });
                }
            }


        })],
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
    },
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Отчитаться',
            text: 'Отчитаться',
            iconCls: 'date_add',
            itemId: 'addReport'
        },
        {
            xtype: 'button',
            tooltip: 'Отчёты',
            text: 'Отчёты',
            iconCls: 'date_magnify',
            itemId: 'viewReports'
        },
        {
            xtype: 'button',
            iconCls: 'add',
            text: 'Добавить услугу',
            tooltip: 'Добавить услугу',
            itemId: 'addServiceU'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'SubdivServStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});