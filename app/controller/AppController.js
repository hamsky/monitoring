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
        'IogvStore@monitoring.store',
        'AllSubdivStore@monitoring.store',
        'ServicesStore@monitoring.store'

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
        'Iogv@monitoring.view.tabs',
        'AllSubdivisions@monitoring.view.tabs',
        'Viewport@monitoring.view'
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


        Ext.Ajax.request({
            url: 'inc/functions.php',
            method: 'POST',
            params: {action: 'getorgname'},
            success: function(result, request) {
                var json = Ext.decode(result.responseText);
                Ext.ComponentQuery.query('#orgName')[0].setText('<b>' + json.name + '</b>', false);
            },
            failure: function(result, request) {

            }
        });



        this.control({
            'actionlist': {
                itemclick: this.OnItemClick
            },
            '#subdivAdd': {
                click: this.subdivOnClick
            },
            '#logout': {
                click: this.logoutClick
            },
            '#addReport': {
                click: this.addReportClick
            },
            '#viewReports': {
                click: this.viewReportsClick
            },
            '#addServiceU': {
                click: this.addServiceUClick
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
        /*
         var acc = Ext.ComponentQuery.query('#accord')[0];
         acc.add([{title: 'Информация', html: 'dddd'}]);
         console.log(acc);
         */
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
    },
    addReportClick: function() {
        alert('addReport');
    },
    viewReportsClick: function() {
        alert('viewReports');
    },
    addServiceUClick: function() {
        var sm = Ext.create('Ext.selection.CheckboxModel');

        Ext.create('Ext.window.Window', {
            title: 'Добавить услуги для ИОГВ',
            width: 750,
            height: 400,
            layout: 'fit',
            modal: true,
            border: false,
            frame: false,
            items: [
                ///
                Ext.create('Ext.grid.Panel', {
                    store: 'ServicesStore',
                    selModel: sm,
                    layout: 'fit',
                    itemId: 'srvAddGrid',
                    columns: [
                        {
                            header: 'Услуга',
                            dataIndex: 'service',
                            editor: {
                                xtype: 'textfield'
                            },
                            flex: 1
                        }

                    ],
                    bbar: Ext.create('Ext.PagingToolbar', {
                        store: 'ServicesStore',
                        displayInfo: true,
                        displayMsg: 'Показано  {0} - {1} из {2}',
                        emptyMsg: "Нет данных для отображения",
                        listeners: {
                            change: function(pagingToolBar, changeEvent) {
                                var pz = this.store.pageSize;
                                var pg = this.store.currentPage;
                                var tc = this.store.getTotalCount();
                                //   console.log(pg * pz - (pz - 1));
                            }

                        }

                    })

                })


                        ///
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Toolbar', {
                    items: [
                        {
                            text: 'Сохранить',
                            iconCls: 'save',
                            handler: function() {
                                var json = Ext.JSON.encode(sm.getSelection().map(function(e) {
                                    return e.data;
                                }));
                                Ext.Ajax.request({
                                    url: 'app/php/actions/addsrviogv.php',
                                    dataType: "json",
                                    params: {
                                        services: json
                                    },
                                    method: 'POST',
                                    success: function(response, options) {
                                        Ext.ComponentQuery.query('#srvAddGrid')[0].getStore().reload();
                                        Ext.ComponentQuery.query('#servGrid')[0].getStore().reload();
                                    }
                                });
                            }
                        },
                        {
                            text: 'Закрыть',
                            iconCls: 'cancel',
                            handler: function() {
                                this.up('.window').close();

                            }
                        }
                    ]
                })
            ]
        }).show();

        //eof 
    }

});


