Ext.define('monitoring.view.ui.ActionsListView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.actionlist',
    store: 'ActionStore',
    rootVisible: false,
    border: false,
    layout: 'fit',
    autoWidth:true
});

