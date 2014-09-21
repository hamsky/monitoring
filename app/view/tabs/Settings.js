var store = {
    login: '',
    password: '',
    email: '',
    isadmin: 'Нет',
    ved: '',
    state: ''
};

Ext.define('monitoring.view.tabs.Settings', {
    extend: 'Ext.grid.property.Grid',
    alias: 'widget.usersettings',
    itemId: 'userSettings',
    source: store,
    sortableColumns: false,
    propertyNames: {
        login: 'Имя пользователя',
        password: 'Пароль',
        email: 'E-mail',
        isadmin: 'Администратор',
        ved: 'Ведомство',
        state: 'Активно'
    },
    dockedItems:
            [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: ['->', {
                            iconCls: 'save',
                            text: 'Сохранить',
                            handler: function () {
                                var gridvalues = this.up('propertygrid').getSource();
                                Ext.Ajax.request({
                                    url: 'app/php/actions/saveusettings.php',
                                    params: gridvalues
                                });

                            }
                        }]
                }],
    listeners: {
        beforerender: function () {
            var cols = this.getView().getHeaderCt().getGridColumns();
            cols[0].setText("Параметр");
            cols[1].setText("Значение");
            cols[0].setWidth(200);

            Ext.Ajax.request({
                url: 'app/php/actions/getusersettings.php',
                success: function (response, opts) {
                    var src = Ext.decode(response.responseText);
                    store.login = src[0].login;
                    store.state = src[0].enabled;
                    store.email = src[0].email;
                    store.ved = src[0].org;
                    Ext.ComponentQuery.query('#userSettings')[0].setSource(store);
                }
            });


        },
        beforeedit: function (editor, e, opts) {
            if (e.record.get('name') === 'ved' || e.record.get('name') === 'state' || e.record.get('name') === 'isadmin') {
                return false;
            }
        }
    }
});