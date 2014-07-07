Ext.define('monitoring.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: [
        'ActionStore@monitoring.store'
    ],
    views: [
        'ActionsListView@monitoring.view.ui',
        'HeaderView@monitoring.view.ui',
        'WorkAreaView@monitoring.view.ui'
    ],
    init: function() {
        this.control({
            'actionlist': {
                itemclick: this.OnItemClick
            }


        });
    },
    OnItemClick: function(tree, record, item, index, e, options) {
        console.log('itemclick');
    }
});


