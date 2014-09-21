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
                                    url: 'monitoring/actions/updsettings.php',
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
            //this.store=store1;
        },
        beforeedit: function (editor, e, opts) {
            if (e.record.get('name') === 'ved' || e.record.get('name') === 'state' || e.record.get('name') === 'isadmin') {
                return false;
            }
        }
    }
});