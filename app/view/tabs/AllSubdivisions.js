Ext.define('monitoring.view.tabs.AllSubdivisions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allsubdivisions',
    itemId: 'allsubdivGrid',
    store: 'AllSubdivStore',
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
                header: 'Подразделение',
                dataIndex: 'subdiv',
                editor: {
                    xtype: 'textfield'
                },
                flex: 45 / 100
            },
            {
                header: 'Ведомство',
                dataIndex: 'org',
                editor: {
                    xtype: 'combo',
                    queryMode: 'remote',
                    store: 'OrgStore',
                    editable: false,
                    displayField: 'org',
                    valueField: 'id',
                    listeners: {
                    }
                },
                flex: 50 / 100
            }, {
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
    }
});