Ext.define('monitoring.view.tabs.Subdivisions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.subdivisions',
    store: 'SubdivisionsStore',
    frame: false,
    autoScroll: true,
    layout: 'fit',
    itemId: 'subdivGrid',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            clicksToMoveEditor: 1,
            autoCancel: false
        
        })
    ],
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {header: 'Подразделения', dataIndex: 'subdiv', editor: {xtype: 'textfield'}, flex: 90 / 100},
            {
                xtype: 'actioncolumn',
                flex: 7 / 100,
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
            tooltip: 'Добавить новое подразделение',
            iconCls: 'page_white_add',
            itemId: 'subdivAdd'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'SubdivisionsStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    }
});

