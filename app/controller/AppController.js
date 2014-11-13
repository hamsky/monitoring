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
        'ServicesStore@monitoring.store',
        'RepSrvStore@monitoring.store',
        'ReportStore@monitoring.store',
        'CategoryStore@monitoring.store',
        'VariantStore@monitoring.store',
        'FoivStore@monitoring.store',
        'InfStore@monitoring.store',
        'SmevStore@monitoring.store'
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
        'Viewport@monitoring.view',
        'AllReports@monitoring.view.tabs',
        'Category@monitoring.view.tabs',
        'Variants@monitoring.view.tabs',
        'Foiv@monitoring.view.tabs',
        'Information@monitoring.view.tabs',
        'SMEV@monitoring.view.tabs'
    ],
    models: [
        'Subdivisions@monitoring.model',
        'OrgType@monitoring.model',
        'Users@monitoring.model',
        'Org@monitoring.model',
        'UserType@monitoring.model',
        'SubdivServ@monitoring.model',
        'AllServices@monitoring.model',
        'AllReports@monitoring.model'
    ],
    init: function() {

        if (Ext.grid.RowEditor) {
            Ext.apply(Ext.grid.RowEditor.prototype, {
                saveBtnText: 'Сохранить',
                cancelBtnText: 'Отмена',
                errorsText: 'Ошибка',
                dirtyText: 'You need to commit or cancel your changes'
            });
        }
        ;
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
            },
            '#addOrgType': {
                click: this.addOrgType
            },
            '#addServiceA': {
                click: this.addServiceAClick
            },
            '#omsuAdd': {
                click: this.addOMSU
            },
            '#iogvAdd': {
                click: this.addIOGV
            },
            '#userAdd': {
                click: this.addUser
            },
            '#repPeriod': {
                click: this.repPeriodClick
            },
            '#addInfSmev': {
                click: this.addSmevInformation
            },
            '#usersView': {
                click: this.usersView
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
        // 
        Ext.create('Ext.window.Window', {
            title: 'Отчитаться',
            width: 500,
            autoShow: true,
            iconCls: 'report_add',
            modal: true,
            border: false,
            closable: true,
            items: [
                {
                    xtype: 'form',
                    url: 'app/php/actions/addreport.php',
                    frame: false,
                    bodyPadding: 15,
                    defaults: {
                        xtype: 'textfield',
                        anchor: '100%',
                        labelWidth: 60
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'serv',
                            store: 'RepSrvStore',
                            valueField: 'id',
                            displayField: 'service',
                            fieldLabel: "Услуга",
                            allowBlank: false,
                            listConfig: {
                                getInnerTpl: function() {
                                    return '<b>{service}</b>';
                                }
                            }
                        },
                        {
                            xtype: 'datefield',
                            name: 'date',
                            fieldLabel: 'Дата',
                            anchor: '50%',
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            name: 'val',
                            fieldLabel: 'Предоставлено',
                            anchor: '50%',
                            minValue: 0,
                            value: 0,
                            allowBlank: false,
                            labelWidth: 100
                        }, {
                            xtype: 'numberfield',
                            name: 'jval',
                            fieldLabel: 'Подано жалоб',
                            anchor: '50%',
                            minValue: 0,
                            value: 0,
                            allowBlank: false,
                            labelWidth: 100,
                            listeners: {
                                change: function(field, value) {
                                    var fm = this.up('form').getForm().findField('jst');
                                    if (value !== 0) {
                                        fm.setDisabled(false);
                                    } else {
                                        fm.setDisabled(true);
                                        fm.setValue('');
                                    }
                                    console.log(fm);
                                }
                            }
                        },
                        {
                            xtype: 'fieldset',
                            title: '<b>Суть поданых жалоб:</b>',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },
                            layout: 'anchor',
                            items: [
                                {
                                    xtype: 'textarea',
                                    height: 70,
                                    name: 'jst',
                                    disabled: true
                                }
                            ]}

                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom'
                            , items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    formBind: true,
                                    iconCls: 'table_go',
                                    text: "Отправить",
                                    handler: function() {
                                        var form = this.up('form').getForm();
                                        form.submit({
                                            success: function(form, action) {
                                                form.reset();
                                            }
                                        });
                                    }
                                }]}
                    ]

                }]

        });
        //
    },
    viewReportsClick: function() {
        Ext.getStore('ReportStore').reload();
        Ext.create('Ext.window.Window', {
            title: 'Оказанные услуги',
            width: 900,
            height: 400,
            autoShow: true,
            iconCls: 'chart_bar',
            modal: true,
            border: false,
            frame: false,
            closable: true,
            layout: 'fit',
            items: [
                Ext.create('Ext.grid.Panel', {
                    layout: 'fit',
                    store: 'ReportStore',
                    features: [
                        Ext.create('Ext.grid.feature.Grouping', {
                            groupHeaderTpl: '{name}'
                        })
                    ],
                    columns: [
                        {
                            text: 'Дата',
                            flex: 1,
                            dataIndex: 'date'
                        },
                        {
                            text: 'Количество предоставленных услуг',
                            flex: 1,
                            dataIndex: 'value'
                        },
                        {
                            text: 'Количество жалоб',
                            flex: 1,
                            dataIndex: 'complaints'
                        }
                    ]
                })

            ]
        });
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
    },
    addOrgType: function() {
        Ext.create('Ext.window.Window', {
            title: 'Добавить тип ведомства',
            iconCls: 'page_white_add',
            width: 450,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/addorgtype.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [{
                            xtype: 'hidden',
                            name: 'action',
                            value: 'addvtype'
                        }, {
                            xtype: 'textfield',
                            name: 'vtype',
                            fieldLabel: 'Тип',
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
                                        this.up('.window').close();
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
                                                    Ext.ComponentQuery.query('#orgTypeGrid')[0].getStore().reload()
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
    addServiceAClick: function() {
        Ext.create('Ext.window.Window', {
            title: 'Добавить услугу',
            width: 550,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'inc/functions.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [{
                            xtype: 'hidden',
                            name: 'action',
                            value: 'addservice'
                        },
                        {
                            xtype: 'textarea',
                            name: 'servicename',
                            fieldLabel: 'Наименование',
                            height: 130,
                            allowBlank: false

                        }],
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
                                        this.up('.window').close();
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
                                                    Ext.ComponentQuery.query('#AllServices')[0].getStore().reload();
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
    addOMSU: function() {
        Ext.create('Ext.window.Window', {
            title: 'Добавить ОМСУ',
            width: 550,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/addomsu.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [{
                            xtype: 'hidden',
                            name: 'action',
                            value: 'addiogv'
                        },
                        {
                            xtype: 'textarea',
                            name: 'iogv',
                            fieldLabel: 'Наименование',
                            height: 50,
                            allowBlank: false

                        },
                        {
                            xtype: 'textfield',
                            name: 'manage',
                            fieldLabel: 'Руководитель',
                            allowBlank: false
                        },
                        {
                            xtype: 'hidden',
                            name: 'type',
                            value: 'ОМСУ'
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
                                        this.up('.window').close();
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
                                                    Ext.ComponentQuery.query('#omsuGrid')[0].getStore().reload();
                                                    form.reset();
                                                }
                                            });
                                        }
                                    }

                                }
                            ]}]


                })


            ]}).show();
    },
    addIOGV: function() {

        Ext.create('Ext.window.Window', {
            title: 'Добавить ИОГВ',
            width: 550,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/addiogv.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [{
                            xtype: 'hidden',
                            name: 'action',
                            value: 'addiogv'
                        },
                        {
                            xtype: 'textarea',
                            name: 'iogv',
                            fieldLabel: 'Наименование',
                            height: 50,
                            allowBlank: false

                        },
                        {
                            xtype: 'textfield',
                            name: 'manage',
                            fieldLabel: 'Руководитель',
                            allowBlank: false
                        },
                        {
                            xtype: 'hidden',
                            name: 'type',
                            value: 'ИОГВ'
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
                                        this.up('.window').close();
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
                                                    Ext.ComponentQuery.query('#iogvGrid')[0].getStore().reload();
                                                    form.reset();
                                                }
                                            });
                                        }
                                    }

                                }
                            ]}]


                })


            ]}).show();
    },
    addUser: function() {
        Ext.create('Ext.window.Window', {
            title: 'Добавить пользователя',
            iconCls: 'userAdd',
            width: 450,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/adduser.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [{
                            xtype: 'hidden',
                            name: 'action',
                            value: 'adduser'
                        }, {
                            xtype: 'textfield',
                            name: 'login',
                            fieldLabel: 'Логин',
                            allowBlank: false

                        }, {
                            xtype: 'textfield',
                            name: 'password',
                            fieldLabel: 'Пароль',
                            allowBlank: false
                        }, {
                            xtype: 'textfield',
                            name: 'email',
                            fieldLabel: 'E-mail',
                            allowBlank: false
                        }, {
                            xtype: 'checkbox',
                            name: 'active',
                            fieldLabel: 'Активно'
                        }, {
                            xtype: 'combobox',
                            name: 'iogv',
                            fieldLabel: 'ИОГВ',
                            allowBlank: false,
                            store: Ext.create('Ext.data.Store', {
                                fields: ['id', 'iogv'],
                                pageSize: 10,
                                proxy: {
                                    type: 'ajax',
                                    url: 'app/php/actions/getiogvua.php',
                                    reader: {
                                        type: 'json',
                                        rootProperty: 'iogvs'
                                    }
                                }}),
                            displayField: 'iogv',
                            valueField: 'id',
                            pageSize: 10,
                            listConfig: {
                                getInnerTpl: function() {
                                    return '<div class="rate"><b>[{id}]</b> {iogv}</div>';
                                }
                            }
                        }, {
                            xtype: 'combobox',
                            name: 'utype',
                            fieldLabel: 'Тип',
                            allowBlank: false,
                            store: Ext.create('Ext.data.Store', {
                                fields: ['id', 'name'],
                                proxy: {
                                    type: 'ajax',
                                    url: 'app/php/actions/getutype.php',
                                    reader: {
                                        type: 'json',
                                        rootProperty: 'utypes'
                                    }
                                }}),
                            displayField: 'name',
                            valueField: 'id'

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
                                        this.up('.window').close();
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
                                                    Ext.ComponentQuery.query('#userGrid')[0].getStore().reload();
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
    repPeriodClick: function() {

        Ext.create('Ext.window.Window', {
            title: 'Выбрать отчётный период',
            width: 350,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/getreportp.php',
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
                            value: Ext.ComponentQuery.query('#orgRep')[0].getValue()
                        },
                        {
                            xtype: 'datefield',
                            name: 'date',
                            fieldLabel: 'Период',
                            format: 'm/Y',
                            startDay: 1,
                            allowBlank: false

                        },
                        {
                            xtype: 'combobox',
                            name: 'subdiv',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['id', 'name'],
                                pageSize: 10,
                                actionMethods: {create: "POST", read: "POST", update: "POST", destroy: "POST"},
                                proxy: {
                                    type: 'ajax',
                                    url: 'app/php/actions/getrepsubdiv.php',
                                    extraParams: {
                                        org: Ext.ComponentQuery.query('#orgRep')[0].getValue()
                                    },
                                    reader: {
                                        type: 'json',
                                        rootProperty: 'subdivs'
                                    }
                                }}).load(),
                            displayField: 'name',
                            valueField: 'id',
                            pageSize: 10,
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
                                        this.up('.window').close();
                                    }
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'submit',
                                    formBind: true,
                                    iconCls: 'search',
                                    text: "Искать",
                                    listeners: {
                                        click: function() {
                                            var form = this.up('form').getForm();
                                            var fstore = Ext.create("Ext.data.Store", {
                                                fields: ['id', 'date', 'service', 'value', 'complaints', 'gcompl', 'subdiv'],
                                                groupField: 'service',
                                                proxy: {
                                                    type: 'ajax',
                                                    actionMethods: {create: "POST", read: "POST", update: "POST", destroy: "POST"},
                                                    url: 'app/php/actions/getreportp.php',
                                                    reader: {
                                                        type: 'json',
                                                        rootProperty: 'services'
                                                    }
                                                }

                                            });
                                            fstore.load({params: form.getValues()});
                                            Ext.ComponentQuery.query('#allReports')[0].getStore().group('service');
                                            Ext.ComponentQuery.query('#allReports')[0].reconfigure(fstore);
                                            this.up('.window').close();
                                        }
                                    }

                                }
                            ]}]


                })


            ]}).show();
    },
    addSmevInformation: function() {

        Ext.create('Ext.window.Window', {
            title: 'Добавить сведение/документ',
            iconCls: 'page_add',
            width: 450,
            layout: 'fit',
            modal: true,
            border: false,
            items: [
                new Ext.widget('form', {
                    frame: false,
                    url: 'app/php/actions/addinfsmev.php',
                    bodyPadding: 10,
                    bodyBorder: false,
                    defaults: {
                        anchor: '100%'
                    },
                    fieldDefaults: {
                        labelAlign: 'left'
                    },
                    items: [{
                            xtype: 'combobox',
                            name: 'inf',
                            fieldLabel: 'Наименование',
                            allowBlank: false,
                            store: 'InfStore',
                            displayField: 'name',
                            valueField: 'id'
                        }, {
                            xtype: 'combobox',
                            name: 'foiv',
                            fieldLabel: 'ФОИВ',
                            allowBlank: false,
                            store: 'FoivStore',
                            displayField: 'name',
                            valueField: 'id'
                        }, {
                            xtype: 'combobox',
                            name: 'category',
                            fieldLabel: 'Категория',
                            allowBlank: false,
                            store: 'CategoryStore',
                            displayField: 'category',
                            valueField: 'id'
                        }, {
                            xtype: 'combobox',
                            name: 'rejim',
                            fieldLabel: 'Режим',
                            allowBlank: false,
                            store: 'VariantStore',
                            displayField: 'type_',
                            valueField: 'id'
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
                                        this.up('.window').close();
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
                                                    Ext.ComponentQuery.query('#smevGrid')[0].getStore().reload();
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
    usersView: function() {

        Ext.create('Ext.window.Window', {
            title: 'Ответственные лица',
            width: 600,
            height: 470,
            autoShow: true,
            iconCls: 'folder_user',
            modal: true,
            border: true,
            closable: true,
            layout: 'accordion',
            viewModel: {
                stores: {
                    persons: {
                        autoLoad: true,
                        fields: ['id', 'initials', 'date_', 'email', 'skype'],
                        itemId: 'PersonsStore',
                        remoteSort: false,
                        sorters: 'initials',
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: 'app/php/actions/getpersons.php',
                                destroy: 'app/php/actions/deleteperson.php'
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'persons'
                            },
                            writer: {
                                type: 'json',
                                writeAllFields: false,
                                allowSingle: false,
                                encode: true,
                                rootProperty: 'persons'
                            }
                        }
                    }
                }
            },
            items: [{
                    title: 'Перечень ответственных лиц',
                    xtype: 'grid',
                    bind: {
                        store: '{persons}'
                    },
                    reference: 'allPersons',
                    itemId: 'personsGrid',
                    columns: [
                        {xtype: 'rownumberer'},
                        {
                            header: 'Ф.И.О',
                            dataIndex: 'initials',
                            flex: 60 / 100,
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            header: 'Дата вступления, номер приказа',
                            dataIndex: 'date_',
                            hidden: true
                        },
                        {
                            header: 'E-mail',
                            dataIndex: 'email',
                            hidden: true
                        },
                        {
                            header: 'Телефон',
                            dataIndex: 'phone',
                            hidden: true
                        },
                        {
                            header: 'Skype',
                            dataIndex: 'skype',
                            hidden: true
                        },
                        {
                            xtype: 'actioncolumn',
                            flex: 20 / 100,
                            header: 'Действия',
                            items: [
                                {
                                    iconCls: 'user_delete',
                                    tooltip: 'Удалить',
                                    handler: function(grid, rowIndex, colIndex) {
                                        var rec = grid.getStore().getAt(rowIndex);
                                        grid.store.remove(rec);
                                        grid.store.sync();
                                        grid.store.reload();
                                    }
                                }//,
//                                {
//                                    iconCls: 'user_edit',
//                                    tooltip: 'Изменить'
//                                }
                            ]
                        }
                    ],
                    tbar: [
                        {
                            xtype: 'button',
                            tooltip: 'Добавить новое ответственное лицо',
                            text: 'Добавить ответственное лицо',
                            iconCls: 'userAdd',
                            itemId: 'addPerson',
                            handler: function() {
                                Ext.create('Ext.window.Window', {
                                    title: 'Добавить',
                                    width: 300,
                                    height: 110,
                                    iconCls: 'userAdd',
                                    modal: true,
                                    border: true,
                                    closable: true,
                                    layout: 'fit',
                                    defaultType: 'textfield',
                                    items: [{
                                            xtype: 'form',
                                            url: 'app/php/actions/createperson.php',
                                            frame: false,
                                            bodyPadding: 15,
                                            itemId: 'personAdd',
                                            defaults: {
                                                xtype: 'textfield',
                                                anchor: '100%',
                                                labelWidth: 60
                                            },
                                            items: [
                                                {
                                                    fieldLabel: 'Ф.И.О',
                                                    name: 'initials',
                                                    flex: 1,
                                                    allowBlank: false
                                                }]
                                        }],
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
                                                    itemId: 'submit',
                                                    formBind: true,
                                                    iconCls: 'add',
                                                    text: "Добавить",
                                                    handler: function() {
                                                        var form = Ext.ComponentQuery.query('#personAdd')[0].getForm();
                                                        form.submit({
                                                            success: function(form, action) {
                                                                Ext.ComponentQuery.query('#personsGrid')[0].getStore().reload();
                                                            },
                                                            failure: function(form, action) {
//                                                    var decodedString = Ext.decode(action.response.responseText);
//                                                        msg: decodedString.text
                                                            }
                                                        });


                                                    }
                                                }
                                            ]}]
                                }).show();

                            }
                        }
                    ],
                    autoScroll: true
                },
                {
                    xtype: 'form',
                    title: 'Изменить данные ответственного',
                    layout: 'form',
                    url: 'app/php/actions/updateperson.php',
                    defaultType: 'textfield',
                    itemId: 'personsForm',
                    items: [
                        {
                            xtype: 'hidden',
                            name: 'id',
                            bind: '{allPersons.selection.id}'

                        },
                        {
                            fieldLabel: 'Ф.И.О',
                            name: 'initials',
                            bind: '{allPersons.selection.initials}',
                            flex: 1
                        }, {
                            fieldLabel: 'Распоряжение о назначении',
                            name: 'date_',
                            bind: '{allPersons.selection.date_}',
                            flex: 1
                        },
                        {
                            fieldLabel: 'E-mail',
                            name: 'email',
                            bind: '{allPersons.selection.email}',
                            flex: 1
                        },
                        {
                            fieldLabel: 'Телефон',
                            name: 'phone',
                            bind: '{allPersons.selection.phone}',
                            flex: 1
                        },
                        {
                            fieldLabel: 'Skype',
                            name: 'skype',
                            bind: '{allPersons.selection.skype}',
                            flex: 1
                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Сфера ответственности',
                            defaultType: 'checkboxfield',
                            items: [{
                                    boxLabel: 'Представитель руководства, курирующий работы по информатизации',
                                    name: 'inform',
                                    inputValue: '1',
                                    id: 'checkbox1'
                                }, {
                                    boxLabel: 'Ответственный за работу единой системы документооборота',
                                    name: 'sed',
                                    inputValue: '2',
                                    // checked: true,
                                    id: 'checkbox2'
                                }, {
                                    boxLabel: 'Ответственный за работу с СМЭВ',
                                    name: 'smev',
                                    inputValue: '3',
                                    id: 'checkbox3'
                                }, {
                                    boxLabel: 'Ответственный за техническую защиту информации',
                                    name: 'topping',
                                    inputValue: '4',
                                    id: 'checkbox4'
                                }, {
                                    boxLabel: 'Ответственный за заполнение реестра государственных услуг',
                                    name: 'topping',
                                    inputValue: '5',
                                    id: 'checkbox5'
                                }, {
                                    boxLabel: 'Ответственный за административную реформу',
                                    name: 'topping',
                                    inputValue: '6',
                                    id: 'checkbox6'
                                }, {
                                    boxLabel: 'Администратор информационной системы',
                                    name: 'admin',
                                    inputValue: '7',
                                    id: 'checkbox7'
                                }
                            ]
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
                                    itemId: 'subm',
                                    formBind: true,
                                    iconCls: 'accept',
                                    text: "Применить",
                                    listeners: {
                                        click: function() {
                                            var form = Ext.ComponentQuery.query('#personsForm')[0].getForm();

                                            form.submit({
                                                success: function(form, action) {
//                                                    var redirect = 'index.php';
//                                                    window.location = redirect;
                                                },
                                                failure: function(form, action) {
//                                                    var decodedString = Ext.decode(action.response.responseText);
//                                                        msg: decodedString.text
                                                }
                                            });

                                        }
                                    }
                                }
                            ]
                        }]


                }




            ]

        });
    }
});


