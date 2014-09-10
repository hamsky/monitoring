Ext.define('monitoring.view.SMEVU', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.smevu',
    store: 'SMEVUStore',
    itemId: 'SMEVUGrid',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            clicksToMoveEditor: 1,
            autoCancel: false
        })],
    initComponent: function() {
     this.columns=[]
    },
    tbar: [
    ],
    bbar: {
    }
});

