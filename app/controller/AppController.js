Ext.define('monitoring.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: [
        'ActionStore@monitoring.store',
        'SubdivisionsStore@monitoring.store',
        'SubdivServStore@monitoring.store',
        'OrgTypeStore@monitoring.store',
        'OrgStore@monitoring.store',
        'UserTypeStore@monitoring.store',
        'UserStore@monitoring.store',
        'AllServStore@monitoring.store',
        'OmsuStore@monitoring.store',
        'IogvStore@monitoring.store'

    ],
    views: [
        'ActionsListView@monitoring.view.ui',
        'HeaderView@monitoring.view.ui',
        'WorkAreaView@monitoring.view.ui',
        'Subdivisions@monitoring.view.tabs',
        'Services@monitoring.view.tabs',
        'Settings@monitoring.view.tabs',
        'OrgType@monitoring.view.tabs',
        'Users@monitoring.view.tabs',
        'AllServices@monitoring.view.tabs',
        'Omsu@monitoring.view.tabs',
        'Iogv@monitoring.view.tabs'
    ],
    models: [
        'Subdivisions@monitoring.model',
        'OrgType@monitoring.model',
        'Users@monitoring.model',
        'Org@monitoring.model',
        'UserType@monitoring.model',
        'SubdivServ@monitoring.model',
        'AllServices@monitoring.model'
    ],
    init: function() {


        this.control({
            'actionlist': {
                itemclick: this.OnItemClick
            },
            '#subdivAdd': {
                click: this.subdivOnClick
            },
            '#logout': {
                click: this.logoutClick
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
                tabPanel.add({
                    title: nodeText,
                    iconCls: record.data.iconCls,
                    layout: 'fit',
                    closable: 'true',
                    items: [
                        {
                            xtype: record.data.hrefTarget
                        }
                    ]
                }).show();
            }

        }
///
        console.log(tabPanel);
    },
    subdivOnClick: function() {
        Ext.create('Ext.window.Window', {
            title: 'Добавить подразделение',
            width: 450,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/addsubdiv.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'org',
                            value: -1

                        },
                        {
                            xtype: 'textfield',
                            name: 'subdiv',
                            fieldLabel: 'Подразделение',
                            allowBlank: false
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'close',
                                    iconCls: 'cancel',
                                    text: "Закрыть",
                                    handler: function() {
                                        this.up('window').close();
                                    }
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    formBind: true,
                                    iconCls: 'accept',
                                    text: "Добавить",
                                    listeners: {
                                        click: function() {
                                            var form = this.up('form').getForm();
                                            form.submit({
                                                success: function(form, action) {
                                                    Ext.ComponentQuery.query('#subdivGrid')[0].getStore().reload();
                                                    form.reset();
                                                }
                                            });
                                        }
                                    }

                                }
                            ]}]
                })
            ]
        }).show();
    },
    logoutClick: function() {
        Ext.Ajax.request({
            url: 'inc/functions.php',
            params: {action: 'logout'},
            success: function() {
                location.reload();
            }
        });
    }


});


