Ext.define('js.monapp.LoginFormView', {
    extend: 'Ext.window.Window',
    alias:'widget.loginform',
    autoShow: true,
    closable: false,
    title: "Портал мониторинга",
    modal: true,
    width: 300,
    iconCls: 'key',
    items: [
        {
            xtype: 'form',
            url: 'inc/auth.php',
            frame: false,
            bodyPadding: 15,
            id: 'loginfrm',
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60
            },
            items: [
                {
                    name: 'login',
                    fieldLabel: "Логин",
                    allowBlank: false
                },
                {
                    inputType: 'password',
                    name: 'password',
                    allowBlank: false,
                    fieldLabel: "Пароль"
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'component',
                            autoEl: {
                                tag: 'a',
                                href: '#registration',
                                html: 'Регистрация'
                            },
                            listeners: {
                                render: function(component) {
                                    component.getEl().on('click', function(e) {
                                        Ext.create("js.monapp.RegFormView");
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit',
                            formBind: true,
                            iconCls: 'enter',
                            text: "Войти",
                            handler: function() {
                                var form = this.up('form').getForm();
                                form.submit({
                                    success: function(form, action) {
                                        var redirect = 'index.php';
                                        window.location = redirect;
                                    },
                                    failure: function(form, action) {
                                        var decodedString = Ext.decode(action.response.responseText);
                                        Ext.MessageBox.show({
                                            title: 'Ошибка',
                                            msg: decodedString.text,
                                            buttons: Ext.MessageBox.OK,
                                            icon: Ext.MessageBox.ERROR,
                                            width: 350,
                                            closable: false
                                        });


                                    }
                                });
                            }
                        }

                    ]
                }
            ]



        }
    ]

});


