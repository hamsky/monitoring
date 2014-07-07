Ext.define('monitoring.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: [
        'ActionStore@monitoring.store'
    ],
    views: [
        'ActionsListView@monitoring.view.ui',
        'HeaderView@monitoring.view.ui',
        'WorkAreaView@monitoring.view.ui',
        'Subdivisions@monitoring.view.tabs'
    ],
    init: function() {
        this.control({
            'actionlist': {
                itemclick: this.OnItemClick
            }


        });
    },
    OnItemClick: function(tree, record, item, index, e, options) {
        var nodeText = record.data.text;
        var tabPanel = Ext.ComponentQuery.query('#workArea')[0];
        var existTab = false;
////
        if (record.data.leaf) {
            tabPanel.items.each(function(tab) {
                if (nodeText === tab.title) {
                    existTab = true;

                }
            });

            if (!existTab) {
                console.log(record.data.hrefTarget);
                // var wgt = Ext.create(record.data.hrefTarget);
                tabPanel.add({
                    title: nodeText,
                    iconCls: record.data.iconCls,
                    closable: 'true',
                    layout: 'fit',
                    items: [
                        {xtype: 'panel'}
                        //wgt
                    ]
                }).show();

            }

        }
///
        console.log(tabPanel);
    }
});


