Ext.define('monitoring.view.ui.RegFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.regfrm',
    autoShow: true,
    closable: true,
    title: "Регистрация",
    modal: true,
    layout: 'fit',
    width: 350,
    iconCls: 'userAdd',
    items: [
        {
            xtype: 'form',
            frame: false,
            url: 'app/php/actions/reg.php',
            width: 350,
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
                    value: 'registration'
                },
                {
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Логин',
                    allowBlank: false,
                    minLength: 3
                }, {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    vtype: 'email',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'password',
                    fieldLabel: 'Пароль',
                    inputType: 'password',
                    allowBlank: false,
                    minLength: 6
                }, {
                    xtype: 'combobox',
                    name: 'iogvs',
                    store: 'OrgInfoStore',
                    displayField: 'iogv',
                    valueField: 'id',
                    fieldLabel: 'Организация',
                    allowBlank: false,
                    listConfig: {
                        getInnerTpl: function() {
                            return '<b>{iogv}</b>' +
                                    '<div class="rate">Руководитель: {manage}</div>';
                        }
                    }
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
                            itemId: 'submit',
                            formBind: true,
                            iconCls: 'accept',
                            text: "Регистрация"//,
//                            handler: function() {
//                                var form = this.up('form').getForm();
/////
//                                form.submit({
//                                    success: function(form, action) {
//                                        Ext.Msg.alert('Информация', 'Пользователь успешно зарегистрирован', function(btn, text) {
//                                            if (btn == 'ok') {
//
//                                                var redirect = 'index.php';
//                                                window.location = redirect;
//                                            }
//                                        }
//                                        );
//
//
//
//                                    }
//                                });
//                            }




                        }]
                }]


        }
    ]//   ,
//    listeners: {
//        close: function() {
//
//                   //    console.log(this.down('form').remove());
//        }
//    }

});

